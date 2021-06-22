/* eslint-disable no-useless-call */
import dayjs from 'dayjs';

export default class Logger {
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

  private __log(type: 'log' | 'info' | 'warn' | 'error', args: any[]) {
    console[type].apply(console, [
      this.title,
      type,
      dayjs().format('YYYY/MM/DD HH:mm:ss'),
      ...args,
    ]);
  }
}
