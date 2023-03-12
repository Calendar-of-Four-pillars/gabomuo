/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import { v1 } from 'uuid';

export type TargetDate = 'string';
export type Gan = {
  name: string;
  np: boolean;
  element: number;
};
export type Intermidiation = {
  yeo: Gan;
  jung: Gan;
  joong: Gan;
};
export type Ji = Gan & Intermidiation;
export type Saju = {
  year: { gan: Gan; ji: Ji };
  month: { gan: Gan; ji: Ji };
  day: { gan: Gan; ji: Ji };
  time: { gan: Gan; ji: Ji };
};
export type Sipsin = {
  year: { gan: string; ji: string };
  month: { gan: string; ji: string };
  day: { gan: string; ji: string };
  time: { gan: string; ji: string };
};
export type Luck = {
  year: string;
  month: string;
  day: string;
  time: string;
};
export type MyoungJo = {
  targetDate: TargetDate;
  saju: Saju;
  sipsin: Sipsin;
  luck: Luck;
};
export const myoungJo = atom<MyoungJo>({
  key: `codeKey/${v1()}`,
  default: { saju: '', sipsin: '', targetDate: '', luck: '' }
});
