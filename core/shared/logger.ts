/* eslint-disable no-useless-call */
import dayjs from 'dayjs';

export default class Logger {
  static create(title: string) {
    return new Logger(title);
  }

  title: string;

  constructor(title: string) {
    this.title = title;
  }

  log(...args: any[]) {
    this.__log('log', args);
  }

  info(...args: any[]) {
    this.__log('info', args);
  }

  warn(...args: any[]) {
    this.__log('warn', args);
  }

  error(...args: any[]) {
    this.__log('error', args);
  }

  timeStart() {
    console.time(`${this.title} time`);
  }

  timeEnd() {
    console.timeEnd(`${this.title} time`);
    console.log();
  }

  private __log(type: 'log' | 'info' | 'warn' | 'error', args: any[]) {
    console[type].apply(console, [
      this.title,
      `${type}:`,
      dayjs().format('YYYY/MM/DD HH:mm:ss'),
      ...args,
    ]);
  }
}
