/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { myoungJo } from 'src/store/friendStore';
import { GANZICOLOR } from 'src/styles/style';
import { CHINESE } from 'src/libs/ganzi';
import { getGanjiColorAndChinese } from './util';
import Profile from './profile';

function FriendSaju() {
  const person = useRecoilValue(myoungJo);
  const { year, month, day, time } = person?.saju;

  const birthDay = person?.targetDate.split('-');

  return (
    <main css={main}>
      {person && <Profile person={person} />}
      {/* <section css={friendBirthCard}>
        <div
          css={css`
            ${ganjiBox};
            background: ${GANZICOLOR[day?.gan.element]};
          `}
        >
          <span css={ganjiText}>{CHINESE[day?.gan.name]}</span>
        </div>
        <div css={friendBirthCardInfo}>
          <p css={friendBirthCardInfoName}>무명인 </p>
          <p css={friendBirthCardInfoGender}>성별</p>
          <p className="friendBirthCard-birth">{`${birthDay[0]}년 ${birthDay[1]}월 ${birthDay[2]}일 00시 00분 (양력)`}</p>
        </div>
      </section> */}
      <section css={friendSajuCard}>
        <div css={pillars}>
          <div css={pillar}>
            <div css={ganjiInfo}>
              <p>시주</p>
              <p>합/충</p>
              <p>{person?.sipsin?.time?.gan}</p>
            </div>
            <div
              css={css`
                ${ganjiBox};
                background: ${GANZICOLOR[time?.gan.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[time?.gan.name]}</span>
            </div>
            <div
              css={css`
                ${ganjiBox};
                background: ${GANZICOLOR[time?.ji.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[time?.ji.name]}</span>
            </div>
            <div css={ganjiInfo}>
              <p>{person?.sipsin?.time?.ji}</p>
              <div css={jiJangGan}>
                <span
                  css={css`
                    color: ${GANZICOLOR[time?.ji?.intermidiation?.yeo.element]};
                  `}
                >
                  {time?.ji?.intermidiation?.yeo?.name}
                </span>
                {time && Object.keys(time.ji.intermidiation).includes('joong') ? (
                  <span
                    css={css`
                      color: ${GANZICOLOR[time?.ji?.intermidiation?.joong.element]};
                    `}
                  >
                    {time?.ji?.intermidiation?.joong?.name}
                  </span>
                ) : (
                  <span> </span>
                )}
                <span
                  css={css`
                    color: ${GANZICOLOR[time?.ji?.intermidiation?.jung.element]};
                  `}
                >
                  {time?.ji?.intermidiation?.jung?.name}
                </span>
              </div>
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
                background: ${GANZICOLOR[day?.gan.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[day?.gan.name]}</span>
            </div>
            <div
              css={css`
                ${ganjiBox};
                background: ${GANZICOLOR[day?.ji.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[day?.ji.name]}</span>
            </div>
            <div css={ganjiInfo}>
              <p>{person?.sipsin?.day?.ji}</p>
              <div css={jiJangGan}>
                <span
                  css={css`
                    color: ${GANZICOLOR[day?.ji?.intermidiation?.yeo.element]};
                  `}
                >
                  {day?.ji?.intermidiation?.yeo?.name}
                </span>
                {day && Object.keys(day.ji.intermidiation).includes('joong') ? (
                  <span
                    css={css`
                      color: ${GANZICOLOR[day?.ji?.intermidiation?.joong.element]};
                    `}
                  >
                    {day?.ji?.intermidiation?.joong?.name}
                  </span>
                ) : (
                  <span> </span>
                )}
                <span
                  css={css`
                    color: ${GANZICOLOR[day?.ji?.intermidiation?.jung.element]};
                  `}
                >
                  {day?.ji?.intermidiation?.jung?.name}
                </span>
              </div>
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
                background: ${GANZICOLOR[month?.gan.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[month?.gan.name]}</span>
            </div>
            <div
              css={css`
                ${ganjiBox};
                background: ${GANZICOLOR[month?.ji.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[month?.ji.name]}</span>
            </div>
            <div css={ganjiInfo}>
              <p>{person?.sipsin?.month?.ji}</p>
              <div css={jiJangGan}>
                <span
                  css={css`
                    color: ${GANZICOLOR[month?.ji?.intermidiation?.yeo.element]};
                  `}
                >
                  {month?.ji?.intermidiation?.yeo?.name}
                </span>
                {month && Object.keys(month.ji.intermidiation).includes('joong') ? (
                  <span
                    css={css`
                      color: ${GANZICOLOR[month?.ji?.intermidiation?.joong.element]};
                    `}
                  >
                    {month?.ji?.intermidiation?.joong?.name}
                  </span>
                ) : (
                  <span> </span>
                )}
                <span
                  css={css`
                    color: ${GANZICOLOR[month?.ji?.intermidiation?.jung.element]};
                  `}
                >
                  {month?.ji?.intermidiation?.jung?.name}
                </span>
              </div>
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
                background: ${GANZICOLOR[year?.gan.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[year?.gan.name]}</span>
            </div>
            <div
              css={css`
                ${ganjiBox};
                background: ${GANZICOLOR[year?.ji.element]};
              `}
            >
              <span css={ganjiText}>{CHINESE[year?.ji.name]}</span>
            </div>
            <div css={ganjiInfo}>
              <p>{person?.sipsin?.year?.ji}</p>
              <div css={jiJangGan}>
                <span
                  css={css`
                    color: ${GANZICOLOR[year?.ji?.intermidiation?.yeo.element]};
                  `}
                >
                  {year?.ji?.intermidiation?.yeo?.name}
                </span>
                {year && Object.keys(year.ji.intermidiation).includes('joong') ? (
                  <span
                    css={css`
                      color: ${GANZICOLOR[year?.ji?.intermidiation?.joong.element]};
                    `}
                  >
                    {year?.ji?.intermidiation?.joong?.name}
                  </span>
                ) : (
                  <span> </span>
                )}
                <span
                  css={css`
                    color: ${GANZICOLOR[year?.ji?.intermidiation?.jung.element]};
                  `}
                >
                  {year?.ji?.intermidiation?.jung?.name}
                </span>
              </div>
              <p>합/충</p>
            </div>
          </div>
        </div>
        <div css={luck}>
          <span>{person?.luck.year}</span>
          <span>{person?.luck.month}</span>
          <span>{person?.luck.day}</span>
          <span>{person?.luck.time}</span>
        </div>
      </section>
    </main>
  );
}

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
  background: #181818;
  border-radius: 20px;
`;
const pillars = css`
  display: flex;
  justify-content: center;
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
const luck = css`
  background: #343a40;
  margin: 16px 0px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;
const jiJangGan = css``;
export default FriendSaju;
