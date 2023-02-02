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
  if (hourGap === 0 && minuteGap > 0) {
    return true;
  }
  return false;
};

export const isLastDay = (hour: number, minute: number): boolean => {
  if (hour === 23 && minute <= 30) {
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
