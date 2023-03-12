/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { friend } from 'src/store/friendStore';
import { getGanjiColorAndChinese } from './util';

const FriendSaju = () => {
  const [person, setPerson] = useRecoilState(friend);
  const { year, month, day, time } = person?.saju;

  const birthDay = person?.targetDate.split('-');
  const nyeongan = getGanjiColorAndChinese(year?.gan.name);
  const nyeonji = getGanjiColorAndChinese(year?.ji.name);
  const wallgan = getGanjiColorAndChinese(month?.gan.name);
  const wallji = getGanjiColorAndChinese(month?.ji.name);
  const ilgan = getGanjiColorAndChinese(day?.gan.name);
  const ilji = getGanjiColorAndChinese(day?.ji.name);
  const sigan = getGanjiColorAndChinese(time?.gan.name);
  const siji = getGanjiColorAndChinese(time?.ji.name);

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
            <span css={ganjiText}>{sigan?.chinese}</span>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${siji?.color};
            `}
          >
            <span css={ganjiText}>{siji?.chinese}</span>
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
            <span css={ganjiText}>{ilgan?.chinese}</span>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${ilji?.color};
            `}
          >
            <span css={ganjiText}>{ilji?.chinese}</span>
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
            <span css={ganjiText}>{wallgan?.chinese}</span>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${wallji?.color};
            `}
          >
            <span css={ganjiText}>{wallji?.chinese}</span>
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
            <span css={ganjiText}>{nyeongan?.chinese}</span>
          </div>
          <div
            css={css`
              ${ganjiBox};
              background: ${nyeonji?.color};
            `}
          >
            <span css={ganjiText}>{nyeonji?.chinese}</span>
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
