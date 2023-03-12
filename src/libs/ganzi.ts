import { Entries } from 'type-fest';

type GanType = '갑' | '을' | '병' | '정' | '무' | '기' | '경' | '신' | '임' | '계';
type JiType = '자' | '축' | '인' | '묘' | '진' | '사' | '오' | '미' | '신' | '유' | '술' | '해';
type PeriodType = 'year' | 'month' | 'day' | 'time';
type GanOrJi = 'gan' | 'ji';
type GanObjType = {
  name: GanType;
  np: boolean;
  element: number;
};
type JiObjType = {
  name: JiType;
  np: boolean;
  element: number;
};

type JuObjType = {
  gan: GanObjType;
  ji: JiObjType;
};

type GanziByIndexType = {
  [key: number]: JuObjType;
};

type FiveElementType = {
  number: number;
  sipSinNp: boolean;
};

type SipsinGanziType = {
  [key in PeriodType]: {
    [subkey in GanOrJi]: string;
  };
};

type EightWordsType = {
  [key in PeriodType]: JuWordsType;
};

type JuWordsType = {
  [subkey in GanOrJi]: FiveElementType;
};

export const gan: {
  [key: number]: GanObjType;
} = {
  0: {
    name: '갑',
    np: true,
    element: 0
  },
  1: {
    name: '을',
    np: false,
    element: 0
  },
  2: {
    name: '병',
    np: true,
    element: 1
  },
  3: {
    name: '정',
    np: false,
    element: 1
  },
  4: {
    name: '무',
    np: true,
    element: 2
  },
  5: {
    name: '기',
    np: false,
    element: 2
  },
  6: {
    name: '경',
    np: true,
    element: 3
  },
  7: {
    name: '신',
    np: false,
    element: 3
  },
  8: {
    name: '임',
    np: true,
    element: 4
  },
  9: {
    name: '계',
    np: false,
    element: 4
  }
};

export const ji: {
  [key: number]: JiObjType;
} = {
  0: {
    name: '자',
    np: false,
    element: 4
  },
  1: {
    name: '축',
    np: false,
    element: 2
  },
  2: {
    name: '인',
    np: true,
    element: 0
  },
  3: {
    name: '묘',
    np: false,
    element: 0
  },
  4: {
    name: '진',
    np: true,
    element: 2
  },
  5: {
    name: '사',
    np: true,
    element: 1
  },
  6: {
    name: '오',
    np: false,
    element: 1
  },
  7: {
    name: '미',
    np: false,
    element: 2
  },
  8: {
    name: '신',
    np: true,
    element: 3
  },
  9: {
    name: '유',
    np: false,
    element: 3
  },
  10: {
    name: '술',
    np: true,
    element: 2
  },
  11: {
    name: '해',
    np: true,
    element: 4
  }
};

export const ganziByIndexSecond: GanziByIndexType = {
  0: {
    gan: gan[0],
    ji: ji[0]
  },
  1: {
    gan: gan[1],
    ji: ji[1]
  },
  2: {
    gan: gan[2],
    ji: ji[2]
  },
  3: {
    gan: gan[3],
    ji: ji[3]
  },
  4: {
    gan: gan[4],
    ji: ji[4]
  },
  5: {
    gan: gan[5],
    ji: ji[5]
  },
  6: {
    gan: gan[6],
    ji: ji[6]
  },
  7: {
    gan: gan[7],
    ji: ji[7]
  },
  8: {
    gan: gan[8],
    ji: ji[8]
  },
  9: {
    gan: gan[9],
    ji: ji[9]
  },
  10: {
    gan: gan[0],
    ji: ji[10]
  },
  11: {
    gan: gan[1],
    ji: ji[11]
  },
  12: {
    gan: gan[2],
    ji: ji[0]
  },
  13: {
    gan: gan[3],
    ji: ji[1]
  },
  14: {
    gan: gan[4],
    ji: ji[2]
  },
  15: {
    gan: gan[5],
    ji: ji[3]
  },
  16: {
    gan: gan[6],
    ji: ji[4]
  },
  17: {
    gan: gan[7],
    ji: ji[5]
  },
  18: {
    gan: gan[8],
    ji: ji[6]
  },
  19: {
    gan: gan[9],
    ji: ji[7]
  },
  20: {
    gan: gan[0],
    ji: ji[8]
  },
  21: {
    gan: gan[1],
    ji: ji[9]
  },
  22: {
    gan: gan[2],
    ji: ji[10]
  },
  23: {
    gan: gan[3],
    ji: ji[11]
  },
  24: {
    gan: gan[4],
    ji: ji[0]
  },
  25: {
    gan: gan[5],
    ji: ji[1]
  },
  26: {
    gan: gan[6],
    ji: ji[2]
  },
  27: {
    gan: gan[7],
    ji: ji[3]
  },
  28: {
    gan: gan[8],
    ji: ji[4]
  },
  29: {
    gan: gan[9],
    ji: ji[5]
  },
  30: {
    gan: gan[0],
    ji: ji[6]
  },
  31: {
    gan: gan[1],
    ji: ji[7]
  },
  32: {
    gan: gan[2],
    ji: ji[8]
  },
  33: {
    gan: gan[3],
    ji: ji[9]
  },
  34: {
    gan: gan[4],
    ji: ji[10]
  },
  35: {
    gan: gan[5],
    ji: ji[11]
  },
  36: {
    gan: gan[6],
    ji: ji[0]
  },
  37: {
    gan: gan[7],
    ji: ji[1]
  },
  38: {
    gan: gan[8],
    ji: ji[2]
  },
  39: {
    gan: gan[9],
    ji: ji[3]
  },
  40: {
    gan: gan[0],
    ji: ji[4]
  },
  41: {
    gan: gan[1],
    ji: ji[5]
  },
  42: {
    gan: gan[2],
    ji: ji[6]
  },
  43: {
    gan: gan[3],
    ji: ji[7]
  },
  44: {
    gan: gan[4],
    ji: ji[8]
  },
  45: {
    gan: gan[5],
    ji: ji[9]
  },
  46: {
    gan: gan[6],
    ji: ji[10]
  },
  47: {
    gan: gan[7],
    ji: ji[11]
  },
  48: {
    gan: gan[8],
    ji: ji[0]
  },
  49: {
    gan: gan[9],
    ji: ji[1]
  },
  50: {
    gan: gan[0],
    ji: ji[2]
  },
  51: {
    gan: gan[1],
    ji: ji[3]
  },
  52: {
    gan: gan[2],
    ji: ji[4]
  },
  53: {
    gan: gan[3],
    ji: ji[5]
  },
  54: {
    gan: gan[4],
    ji: ji[6]
  },
  55: {
    gan: gan[5],
    ji: ji[7]
  },
  56: {
    gan: gan[6],
    ji: ji[8]
  },
  57: {
    gan: gan[7],
    ji: ji[9]
  },
  58: {
    gan: gan[8],
    ji: ji[10]
  },
  59: {
    gan: gan[9],
    ji: ji[11]
  }
};

export const ganziByIndex = [
  '갑자',
  '을축',
  '병인',
  '정묘',
  '무진',
  '기사',
  '경오',
  '신미',
  '임신',
  '계유',
  '갑술',
  '을해',
  '병자',
  '정축',
  '무인',
  '기묘',
  '경진',
  '신사',
  '임오',
  '계미',
  '갑신',
  '을유',
  '병술',
  '정해',
  '무자',
  '기축',
  '경인',
  '신묘',
  '임진',
  '계사',
  '갑오',
  '을미',
  '병신',
  '정유',
  '무술',
  '기해',
  '경자',
  '신축',
  '임인',
  '계묘',
  '갑진',
  '을사',
  '병오',
  '정미',
  '무신',
  '기유',
  '경술',
  '신해',
  '임자',
  '계축',
  '갑인',
  '을묘',
  '병진',
  '정사',
  '무오',
  '기미',
  '경신',
  '신유',
  '임술',
  '계해'
];

export const ganziByKey = {
  갑술: 11,
  갑신: 21,
  갑오: 31,
  갑인: 51,
  갑자: 1,
  갑진: 41,
  경술: 47,
  경신: 57,
  경오: 7,
  경인: 27,
  경자: 37,
  경진: 17,
  계묘: 40,
  계미: 20,
  계사: 30,
  계유: 10,
  계축: 50,
  계해: 60,
  기묘: 16,
  기미: 56,
  기사: 6,
  기유: 46,
  기축: 26,
  기해: 36,
  무술: 35,
  무신: 45,
  무오: 55,
  무인: 15,
  무자: 25,
  무진: 5,
  병술: 23,
  병신: 33,
  병오: 43,
  병인: 3,
  병자: 13,
  병진: 53,
  신묘: 28,
  신미: 8,
  신사: 18,
  신유: 58,
  신축: 38,
  신해: 48,
  을묘: 52,
  을미: 32,
  을사: 42,
  을유: 22,
  을축: 2,
  을해: 12,
  임술: 59,
  임신: 9,
  임오: 19,
  임인: 39,
  임자: 49,
  임진: 29,
  정묘: 4,
  정미: 44,
  정사: 54,
  정유: 34,
  정축: 14,
  정해: 24
};

const startKeyByIlgan = {
  갑: 1,
  을: 13,
  병: 25,
  정: 37,
  무: 49,
  기: 1,
  경: 13,
  신: 25,
  임: 37,
  계: 49
};

const sipSinCode: { [key: number]: { same: string; diff: string } } = {
  0: {
    same: '비견',
    diff: '겁재'
  },
  1: {
    same: '식신',
    diff: '상관'
  },
  2: {
    same: '편재',
    diff: '정재'
  },
  3: {
    same: '편관',
    diff: '정관'
  },
  4: {
    same: '편인',
    diff: '정인'
  }
};

export const getStartGanziIndexOnTime = (ilju: typeof ganziByIndex) => {
  const ilgan = ilju[0];
  return startKeyByIlgan[ilgan as keyof typeof startKeyByIlgan];
};

const normalizeEightWords = (copiedFourPillars: SajuObjType): EightWordsType => {
  const standard = copiedFourPillars.day.gan.element;
  const eightWordsStatus: EightWordsType = {
    year: { gan: { number: 0, sipSinNp: false }, ji: { number: 0, sipSinNp: false } },
    month: { gan: { number: 0, sipSinNp: false }, ji: { number: 0, sipSinNp: false } },
    day: { gan: { number: 0, sipSinNp: false }, ji: { number: 0, sipSinNp: false } },
    time: { gan: { number: 0, sipSinNp: false }, ji: { number: 0, sipSinNp: false } }
  };
  const entriedFourPillars = Object.entries(copiedFourPillars) as Entries<typeof copiedFourPillars>;
  entriedFourPillars.forEach(([key, value]) => {
    const result: JuWordsType = {
      gan: { number: 0, sipSinNp: false },
      ji: { number: 0, sipSinNp: false }
    };
    const entriedValue = Object.entries(value) as Entries<JuObjType>;

    // gan
    entriedValue.forEach(([detailKey, detailValue]) => {
      if (result[detailKey]) {
        const calGrade =
          detailValue.element - standard < 0
            ? detailValue.element - standard + 5
            : detailValue.element - standard;

        result[detailKey].number = calGrade;

        result[detailKey].sipSinNp = detailValue.np;
      }
    });
    eightWordsStatus[key] = result;
  });
  return eightWordsStatus;
};

const makeSipsinFromEightWords = (normalizedEightWords: EightWordsType) => {
  const bornone = normalizedEightWords.day.gan.sipSinNp;
  const result: SipsinGanziType = {
    year: {
      gan: '',
      ji: ''
    },
    month: {
      gan: '',
      ji: ''
    },
    day: {
      gan: '',
      ji: ''
    },
    time: {
      gan: '',
      ji: ''
    }
  };
  const entriedNormalizedEightWords = Object.entries(
    normalizedEightWords
  ) as Entries<EightWordsType>;
  entriedNormalizedEightWords.forEach(([unit, ganji]) => {
    const ganjiResult: { [key in GanOrJi]: string } = {
      gan: '',
      ji: ''
    };
    const entriedGanji = Object.entries(ganji) as Entries<JuWordsType>;
    entriedGanji.forEach(([key, value]) => {
      const sipsinResult =
        bornone === value.sipSinNp ? sipSinCode[value.number].same : sipSinCode[value.number].diff;
      ganjiResult[key] = sipsinResult;
    });
    result[unit] = ganjiResult;
  });
  result.day.gan = '본원';
  return result;
};

type SajuObjType = {
  [key in PeriodType]: JuObjType;
};

export const calTenGodsFromEightWords = (ju: SajuObjType) => {
  const normalizedEightWords = normalizeEightWords({ ...ju });
  const convertedEightWordsToSipsin = makeSipsinFromEightWords(normalizedEightWords);
  return convertedEightWordsToSipsin;
};

export const CHINESE = {
  갑: '甲',
  을: '乙',
  병: '丙',
  정: '丁',
  무: '戊',
  기: '己',
  경: '庚',
  신: '辛',
  임: '壬',
  계: '癸',
  자: '子',
  축: '丑',
  인: '寅',
  묘: '卯',
  진: '辰',
  사: '巳',
  오: '午',
  미: '未',
  신: '申',
  유: '酉',
  술: '戌',
  해: '亥'
};
