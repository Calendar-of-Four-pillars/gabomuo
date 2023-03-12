import { COLOR } from 'src/styles/style';

type SelectItems = {
  label: number;
  value: number;
};

const getYearItems = () => {
  const yearArray = [];
  for (let i = 1899; i < 2100; i += 1) {
    yearArray.push({
      label: i + 1,
      value: i + 1
    });
  }
  return yearArray;
};

const getMonthItems = () => {
  const monthArray = [];
  for (let i = 0; i < 12; i += 1) {
    monthArray.push({ label: i + 1, value: i + 1 });
  }
  return monthArray;
};

const getDayItems = () => {
  const dayArray = [];
  for (let i = 0; i < 31; i += 1) {
    dayArray.push({
      label: i + 1,
      value: i + 1
    });
  }
  return dayArray;
};

const getHourItems = () => {
  const hourArray = [];
  for (let i = 0; i < 12; i += 1) {
    hourArray.push({
      label: i + 1,
      value: i + 1
    });
  }
  return hourArray;
};

const getMinuteItems = () => {
  const minuteArray = [];
  for (let i = 0; i < 60; i += 1) {
    minuteArray.push({
      label: i + 1,
      value: i + 1
    });
  }
  return minuteArray;
};

export const yearItems: Array<SelectItems> = getYearItems();
export const monthItems: Array<SelectItems> = getMonthItems();
export const dayItems: Array<SelectItems> = getDayItems();
export const hourItems: Array<SelectItems> = getHourItems();
export const minuteItems: Array<SelectItems> = getMinuteItems();

export const cityItems = [
  { label: '기준(+0)', value: 0 },
  { label: '서울(-2)', value: -2 },
  { label: '부산(+6)', value: 6 },
  { label: '대구(+4)', value: 4 },
  { label: '인천(-3)', value: -3 },
  { label: '광주(-2)', value: -2 },
  { label: '대전(+0)', value: 0 },
  { label: '청주(+0)', value: 0 },
  { label: '전주(-1)', value: -1 },
  { label: '춘천(+1)', value: 1 },
  { label: '원주(+2)', value: 2 },
  { label: '구미(+3)', value: 3 },
  { label: '강릉(+5)', value: 5 },
  { label: '포항(+7)', value: 7 },
  { label: '경주(+6)', value: 6 },
  { label: '목포(-5)', value: 5 },
  { label: '제주(-4)', value: -4 }
];

export function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
