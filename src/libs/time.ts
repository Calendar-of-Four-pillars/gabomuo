export const isLastSeason = (
  hour: number,
  minute: number,
  comparedHour: number,
  comparedMinute: number
): boolean => {
  const hourGap = hour - comparedHour;
  const minuteGap = minute - comparedMinute;

  if (hourGap > 0) {
    return true;
  }
  if (hourGap === 0 && minuteGap >= 0) {
    return true;
  }
  return false;
};

export const isNextDay = (hour: number, minute: number): boolean => {
  if (hour === 23 && minute >= 30) {
    return true;
  }
  return false;
};

export const isLastDay = (hour: number, minute: number): boolean => {
  if (hour === 23 && minute <= 29) {
    return true;
  }
  return false;
};

const isJasi = (hour: number, minute: number) => {
  if (hour === 23 && minute >= 31) {
    return true;
  }
  return false;
};

const siji = {
  jaStart: new Date('1990-06-21 23:31').getTime(),
  jaEnd: new Date('1990-06-22 1:30').getTime(),

  chukStart: new Date('1990-06-22 1:31').getTime(),
  chukEnd: new Date('1990-06-22 3:30').getTime(),

  inStart: new Date('1990-06-22 3:31').getTime(),
  inEnd: new Date('1990-06-22 5:30').getTime(),

  myoStart: new Date('1990-06-22 5:31').getTime(),
  myoEnd: new Date('1990-06-22 7:30').getTime(),

  jinStart: new Date('1990-06-22 7:31').getTime(),
  jinEnd: new Date('1990-06-22 9:30').getTime(),

  saStart: new Date('1990-06-22 9:31').getTime(),
  saEnd: new Date('1990-06-22 11:30').getTime(),

  oStart: new Date('1990-06-22 11:31').getTime(),
  oEnd: new Date('1990-06-22 13:30').getTime(),

  miStart: new Date('1990-06-22 13:31').getTime(),
  miEnd: new Date('1990-06-22 15:30').getTime(),

  sinStart: new Date('1990-06-22 15:31').getTime(),
  sinEnd: new Date('1990-06-22 17:30').getTime(),

  uStart: new Date('1990-06-22 17:31').getTime(),
  uEnd: new Date('1990-06-22 19:30').getTime(),

  sulStart: new Date('1990-06-22 19:31').getTime(),
  sulEnd: new Date('1990-06-22 21:30').getTime(),

  heStart: new Date('1990-06-22 21:31').getTime(),
  heEnd: new Date('1990-06-22 23:30').getTime()
};

export const getOrderedNumberFromTime = (hour: number, minute: number): number => {
  if (isLastDay(hour, minute)) return 11;
  if (isJasi(hour, minute)) return 0;
  const targetTime = new Date(`1990-06-22 ${hour}:${minute}`).getTime();

  if (targetTime >= siji.jaStart && targetTime <= siji.jaEnd) return 0;
  if (targetTime >= siji.chukStart && targetTime <= siji.chukEnd) return 1;
  if (targetTime >= siji.inStart && targetTime <= siji.inEnd) return 2;
  if (targetTime >= siji.myoStart && targetTime <= siji.myoEnd) return 3;
  if (targetTime >= siji.jinStart && targetTime <= siji.jinEnd) return 4;
  if (targetTime >= siji.saStart && targetTime <= siji.saEnd) return 5;
  if (targetTime >= siji.oStart && targetTime <= siji.oEnd) return 6;
  if (targetTime >= siji.miStart && targetTime <= siji.miEnd) return 7;
  if (targetTime >= siji.sinStart && targetTime <= siji.sinEnd) return 8;
  if (targetTime >= siji.uStart && targetTime <= siji.uEnd) return 9;
  if (targetTime >= siji.sulStart && targetTime <= siji.sulEnd) return 10;
  if (targetTime >= siji.heStart && targetTime <= siji.heEnd) return 11;
  return 0;
};

export const getTimeGanziCode = (dayCode: number, si: number) => {
  if (
    dayCode === 0 ||
    dayCode === 10 ||
    dayCode === 20 ||
    dayCode === 30 ||
    dayCode === 40 ||
    dayCode === 50 ||
    dayCode === 5 ||
    dayCode === 15 ||
    dayCode === 25 ||
    dayCode === 35 ||
    dayCode === 45 ||
    dayCode === 55
  ) {
    return 0 + si;
  }
  if (
    dayCode === 1 ||
    dayCode === 11 ||
    dayCode === 21 ||
    dayCode === 31 ||
    dayCode === 41 ||
    dayCode === 51 ||
    dayCode === 6 ||
    dayCode === 16 ||
    dayCode === 26 ||
    dayCode === 36 ||
    dayCode === 46 ||
    dayCode === 56
  ) {
    return 12 + si;
  }
  if (
    dayCode === 2 ||
    dayCode === 12 ||
    dayCode === 22 ||
    dayCode === 32 ||
    dayCode === 42 ||
    dayCode === 52 ||
    dayCode === 7 ||
    dayCode === 17 ||
    dayCode === 27 ||
    dayCode === 37 ||
    dayCode === 47 ||
    dayCode === 57
  ) {
    return 24 + si;
  }

  if (
    dayCode === 3 ||
    dayCode === 13 ||
    dayCode === 23 ||
    dayCode === 33 ||
    dayCode === 43 ||
    dayCode === 53 ||
    dayCode === 8 ||
    dayCode === 18 ||
    dayCode === 28 ||
    dayCode === 38 ||
    dayCode === 48 ||
    dayCode === 58
  ) {
    return 36 + si;
  }
  if (
    dayCode === 4 ||
    dayCode === 14 ||
    dayCode === 24 ||
    dayCode === 34 ||
    dayCode === 44 ||
    dayCode === 54 ||
    dayCode === 9 ||
    dayCode === 19 ||
    dayCode === 29 ||
    dayCode === 39 ||
    dayCode === 49 ||
    dayCode === 59
  ) {
    return 48 + si;
  }
  return si;
};
