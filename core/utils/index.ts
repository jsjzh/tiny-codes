import path from 'path';

export const getFileName = (filePath: string): string => {
  const pathObj = path.parse(filePath);
  return `${pathObj.name}${pathObj.ext}`;
};
