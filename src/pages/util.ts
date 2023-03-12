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

export const getGanjiColorAndChinese = (ganji) => {
  if (ganji === '갑') {
    return { chinese: '甲', color: COLOR.Tree };
  }
  if (ganji === '을') {
    return { chinese: '乙', color: COLOR.Tree };
  }
  if (ganji === '병') {
    return { chinese: '丙', color: COLOR.Fire };
  }
  if (ganji === '정') {
    return { chinese: '丁', color: COLOR.Fire };
  }
  if (ganji === '무') {
    return { chinese: '戊', color: COLOR.Soil };
  }
  if (ganji === '기') {
    return { chinese: '己', color: COLOR.Soil };
  }
  if (ganji === '경') {
    return { chinese: '庚', color: COLOR.Iron };
  }
  if (ganji === '신') {
    return { chinese: '辛', color: COLOR.Iron };
  }
  if (ganji === '임') {
    return { chinese: '壬', color: COLOR.Water };
  }
  if (ganji === '계') {
    return { chinese: '癸', color: COLOR.Water };
  }
  if (ganji === '자') {
    return { chinese: '子', color: COLOR.Water };
  }
  if (ganji === '축') {
    return { chinese: '丑', color: COLOR.Soil };
  }
  if (ganji === '인') {
    return { chinese: '寅', color: COLOR.Tree };
  }
  if (ganji === '묘') {
    return { chinese: '卯', color: COLOR.Tree };
  }
  if (ganji === '진') {
    return { chinese: '辰', color: COLOR.Soil };
  }
  if (ganji === '사') {
    return { chinese: '巳', color: COLOR.Fire };
  }
  if (ganji === '오') {
    return { chinese: '午', color: COLOR.Fire };
  }
  if (ganji === '미') {
    return { chinese: '未', color: COLOR.Soil };
  }
  if (ganji === '신') {
    return { chinese: '申', color: COLOR.Iron };
  }
  if (ganji === '유') {
    return { chinese: '酉', color: COLOR.Iron };
  }
  if (ganji === '술') {
    return { chinese: '戌', color: COLOR.Soil };
  }
  if (ganji === '해') {
    return { chinese: '亥', color: COLOR.Water };
  }
};

export function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
