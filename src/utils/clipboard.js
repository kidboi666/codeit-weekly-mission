import { useLocation } from 'react-router-dom';

export const copyUrl = (text) => {
  navigator.clipboard.writeText(text);
  return;
};
