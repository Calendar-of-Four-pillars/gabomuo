/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from 'recoil';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v1 } from 'uuid';

export const friend = atom({
  key: `codeKey/${v1()}`,
  //   default: { saju: { day: { gan: { name: '' } } }, sipsin: '', targetDate: '' }
  default: { saju: '', sipsin: '', targetDate: '' }
});

export const friend2 = atom({
  key: `codeKey/${v1()}`,
  default: {}
});
