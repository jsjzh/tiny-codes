import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

const twoSum = (nums: number[], target: number): number[] => {
  logger.log(nums);
  logger.log(target);
  return [];
};

export default twoSum;
