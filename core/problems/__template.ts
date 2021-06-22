import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// ${说明}

const code = (str: string): boolean => {
  return !!str;
};

// const best = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(code(''));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(''));
  // logger.timeEnd();
};
