import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// ${说明}

const code = (str: string): boolean => {
  return !!str;
};

// const better = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.time(() => logger.log(code('')));

  // logger.time(() => logger.log(better('')), 'better');
};
