import { $fontSizebase } from './_variables.js';
export const rem = (size) => {
  return `${size / $fontSizebase}rem`;
};
