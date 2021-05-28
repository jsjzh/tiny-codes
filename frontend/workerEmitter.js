const noop = () => {};
const realType = (obj) => Object.prototype.toString.call(obj);

class WorkerEmitter {
  static PROMISE_FLAG = "_^_PROMISE-FLAG_$_";
  static PROMISE_DONE = "_^_PROMISE-DONE_$_";

  constructor(worker) {
    this.listeners = {};
    this.worker = worker;
    this.worker.addEventListener("message", this._emit.bind(this));
  }

  /**
   * 增加一个 type 的监听
   * @param {string} type type
   * @param {function} callback callback
   */
  on(type, callback) {
    Array.isArray(this.listeners[type]) || (this.listeners[type] = []);
    this.listeners[type].push({ once: false, callback });
  }

  /**
   * 增加一个 type 的监听，只监听一次
   * @param {string} type typ
   * @param {function} callback callback
   */
  once(type, callback) {
    Array.isArray(this.listeners[type]) || (this.listeners[type] = []);
    this.listeners[type].push({ once: true, callback });
  }

  /**
   * 删除一个 type 的某些监听
   * @param {string} type type
   */
  remove(type, callback) {
    this.listeners[type] = this.listeners[type].filter(
      (listener) => listener.callback !== callback
    );
  }

  /**
   * 删除一个 type 的所有监听
   * @param {string} type type
   */
  removeAll(type) {
    this.listeners[type] = [];
  }

  /**
   * 发送信息
   * @param {string} type type
   * @param {any} data data
   */
  emit(type, data) {
    this.worker.postMessage({ _type: type, _data: data });
  }

  /**
   * 以 promise 的方式获取数据，由于 promise 的限制，只支持单次处理
   * @param {string} type type
   * @param {any} data data
   * @returns Promise
   */
  async promise(type, data) {
    const flagType = this._getPromiseFlag(type);
    const doneType = this._getPromiseDone(type);

    return new Promise((resolve, reject) => {
      this.once(doneType, resolve);
      this.emit(flagType, data);
    });
  }

  /**
   * 需要 return 一个值，该值会当做 promise 回传的数据
   * @param {string} type type
   * @param {function} callback callback
   */
  onPromise(type, callback) {
    const flagType = this._getPromiseFlag(type);
    this.on(flagType, callback);
  }

  removePromise(type, callback) {
    const flagType = this._getPromiseFlag(type);
    this.listeners[flagType] = this.listeners[flagType].filter(
      (listener) => listener.callback !== callback
    );
  }

  /**
   * 内部使用的触发，外部不调用
   * @param {Event} event event
   */
  async _emit(event) {
    const { data } = event;
    const { _type, _data } = data;
    if (
      Array.isArray(this.listeners[_type]) &&
      this.listeners[_type].length > 0
    ) {
      for (let index = 0; index < this.listeners[_type].length; index++) {
        const listener = this.listeners[_type][index];
        const { once, callback } = listener;

        const result =
          realType(callback) === "[object AsyncFunction]"
            ? await callback(_data)
            : callback(_data);

        if (_type.startsWith(WorkerEmitter.PROMISE_FLAG)) {
          const type = _type.slice(WorkerEmitter.PROMISE_FLAG.length);
          const doneType = this._getPromiseDone(type);
          this.emit(doneType, result);
        }

        if (once) {
          this.listeners[_type] = this.listeners[_type].filter(
            (listener, _index) => _index !== index
          );
        }
      }
    }
  }

  _getPromiseFlag(type) {
    return `${WorkerEmitter.PROMISE_FLAG}${type}`;
  }

  _getPromiseDone(type) {
    return `${WorkerEmitter.PROMISE_DONE}${type}`;
  }
}
