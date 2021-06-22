import path from 'path';

export const getFileName = (filePath: string): string => {
  const obj = path.parse(filePath);
  return `${obj.name}${obj.ext}`;
};
