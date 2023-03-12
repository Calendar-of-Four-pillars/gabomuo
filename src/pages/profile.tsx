import { css } from '@emotion/react';
import { CHINESE } from 'src/libs/ganzi';
import { GANZICOLOR } from 'src/styles/style';

function Profile({ person }) {
  const { year, month, day, time } = person?.saju;
  const birthDay = person?.targetDate.split('-');
  return (
    <section css={profile}>
      <div
        css={css`
          ${ganjiBox};
          background: ${GANZICOLOR[day?.gan.element]};
        `}
      >
        <span css={ganjiText}>{CHINESE[day?.gan.name]}</span>
      </div>
      <div css={profileInfo}>
        <p css={profileInfoName}>무명인 </p>
        <p css={profileInfoGender}>성별</p>
        <p>{`${birthDay[0]}년 ${birthDay[1]}월 ${birthDay[2]}일 00시 00분 (양력)`}</p>
      </div>
    </section>
  );
}

const profile = css`
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
const profileInfo = css`
  margin: 5px 20px;
`;
const profileInfoName = css`
  font-size: 18px;
`;
const profileInfoGender = css`
  margin: 10px 0 5px;
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

export default Profile;
