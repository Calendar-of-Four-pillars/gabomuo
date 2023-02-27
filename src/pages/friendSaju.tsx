/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { friend, friend2 } from 'src/store/friendStore';

const FriendSaju = () => {
  const [person, setPerson] = useRecoilState(friend);
  const { year, month, day, time } = person.saju;
  console.log('dd');
  const getGanjiColorAndChinese = (ganji) => {
    if (ganji === '갑') {
      return { chinese: '甲', color: '#00B050' };
    }
    if (ganji === '을') {
      return { chinese: '乙', color: '#00B050' };
    }
    if (ganji === '병') {
      return { chinese: '丙', color: '#F35252' };
    }
    if (ganji === '정') {
      return { chinese: '丁', color: '#F35252' };
    }
    if (ganji === '무') {
      return { chinese: '戊', color: '#F8DA4A' };
    }
    if (ganji === '기') {
      return { chinese: '己', color: '#F8DA4A' };
    }
    if (ganji === '경') {
      return { chinese: '庚', color: '#FFF' };
    }
    if (ganji === '신') {
      return { chinese: '辛', color: '#FFF' };
    }
    if (ganji === '임') {
      return { chinese: '壬', color: '#37393D' };
    }
    if (ganji === '계') {
      return { chinese: '癸', color: '#37393D' };
    }
    if (ganji === '자') {
      return { chinese: '子', color: '#37393D' };
    }
    if (ganji === '축') {
      return { chinese: '丑', color: '#F8DA4A' };
    }
    if (ganji === '인') {
      return { chinese: '寅', color: '#00B050' };
    }
    if (ganji === '묘') {
      return { chinese: '卯', color: '#00B050' };
    }
    if (ganji === '진') {
      return { chinese: '辰', color: '#F8DA4A' };
    }
    if (ganji === '사') {
      return { chinese: '巳', color: '#F35252' };
    }
    if (ganji === '오') {
      return { chinese: '午', color: '#F35252' };
    }
    if (ganji === '미') {
      return { chinese: '未', color: '#F8DA4A' };
    }
    if (ganji === '신') {
      return { chinese: '申', color: '#FFF' };
    }
    if (ganji === '유') {
      return { chinese: '酉', color: '#FFF' };
    }
    if (ganji === '술') {
      return { chinese: '戌', color: '#F8DA4A' };
    }
    if (ganji === '해') {
      return { chinese: '亥', color: '#37393D' };
    }
  };

  const birthDay = person?.targetDate.split('-');
  const nyeongan = getGanjiColorAndChinese(person?.saju?.year?.gan?.name);
  const nyeonji = getGanjiColorAndChinese(person?.saju?.year?.ji?.name);
  const wallgan = getGanjiColorAndChinese(person?.saju?.month?.gan?.name);
  const wallji = getGanjiColorAndChinese(person?.saju?.month?.ji?.name);
  const ilgan = getGanjiColorAndChinese(person?.saju?.day?.gan?.name);
  const ilji = getGanjiColorAndChinese(person?.saju?.day?.ji?.name);
  const sigan = getGanjiColorAndChinese(person?.saju?.time?.gan?.name);
  const siji = getGanjiColorAndChinese(person?.saju?.time?.ji?.name);

  return (
    <main css={main}>
      <section css={friendBirthCard}>
        <div
          css={css`
            ${ganjiBox};
            background: ${ilgan?.color};
          `}
        >
          <span css={ganjiText}>{ilgan?.chinese}</span>
        </div>
        <div css={friendBirthCardInfo}>
          <p css={friendBirthCardInfoName}>무명인 (나이)</p>
          <p css={friendBirthCardInfoGender}>성별</p>
          <p className="friendBirthCard-birth">{`${birthDay[0]}년 ${birthDay[1]}월 ${birthDay[2]}일 00시 00분 (양력)`}</p>
        </div>
      </section>
      <section css={friendSajuCard}>
        <div css={pillar}>
          <div css={ganjiInfo}>
            <p>시주</p>
            <p>합/충</p>
            <p>{person?.sipsin?.time?.gan}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${sigan?.color};
            `}
          >
            <p css={ganjiText}>{sigan?.chinese}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${siji?.color};
            `}
          >
            <p css={ganjiText}>{siji?.chinese}</p>
          </div>
          <div css={ganjiInfo}>
            <p>{person?.sipsin?.time?.ji}</p>
            <p>지장간</p>
            <p>합/충</p>
          </div>
        </div>
        <div css={pillar}>
          <div css={ganjiInfo}>
            <p>일주</p>
            <p>합/충</p>
            <p>{person?.sipsin?.day?.gan}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${ilgan?.color};
            `}
          >
            <p css={ganjiText}>{ilgan?.chinese}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${ilji?.color};
            `}
          >
            <p css={ganjiText}>{ilji?.chinese}</p>
          </div>
          <div css={ganjiInfo}>
            <p>{person?.sipsin?.day?.ji}</p>
            <p>지장간</p>
            <p>합/충</p>
          </div>
        </div>
        <div css={pillar}>
          <div css={ganjiInfo}>
            <p>월주</p>
            <p>합/충</p>
            <p>{person?.sipsin?.month?.gan}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${wallgan?.color};
            `}
          >
            <p css={ganjiText}>{wallgan?.chinese}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${wallji?.color};
            `}
          >
            <p css={ganjiText}>{wallji?.chinese}</p>
          </div>
          <div css={ganjiInfo}>
            <p>{person?.sipsin?.month?.ji}</p>
            <p>지장간</p>
            <p>합/충</p>
          </div>
        </div>
        <div css={pillar}>
          <div css={ganjiInfo}>
            <p>년주</p>
            <p>합/충</p>
            <p>{person?.sipsin?.year?.gan}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${nyeongan?.color};
            `}
          >
            <p css={ganjiText}>{nyeongan?.chinese}</p>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${nyeonji?.color};
            `}
          >
            <p css={ganjiText}>{nyeonji?.chinese}</p>
          </div>
          <div css={ganjiInfo}>
            <p>{person?.sipsin?.year?.ji}</p>
            <p>지장간</p>
            <p>합/충</p>
          </div>
        </div>
      </section>
    </main>
  );
};

const main = css`
  position: relative;
  top: 100px;
`;
const friendBirthCard = css`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border: 0.5px solid white;
  background: linear-gradient(
    101.84deg,
    rgba(255, 255, 255, 0.51) 0%,
    rgba(31, 31, 31, 0.28) 88.42%
  );

  border-radius: 10px;
`;
const friendSajuCard = css`
  position: relative;
  top: 40px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background: #181818;
  border-radius: 20px;
`;
const pillar = css``;
const ganjiInfo = css`
  text-align: center;
  line-height: 30px;
`;
const ganjiBox = css`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 8px;
`;
const ganjiText = css`
  font-weight: 700;
  font-size: 40px;

  color: #ffffff;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;
const friendBirthCardInfo = css`
  margin: 5px 20px;
`;
const friendBirthCardInfoName = css`
  font-size: 18px;
`;
const friendBirthCardInfoGender = css`
  margin: 10px 0 5px;
`;
export default FriendSaju;
