/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import { v1 } from 'uuid';

export const friend = atom({
  key: `codeKey/${v1()}`,
  default: { saju: '', sipsin: '', targetDate: '' }
});
