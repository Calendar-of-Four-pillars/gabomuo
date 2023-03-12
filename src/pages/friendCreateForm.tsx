/** @jsxImportSource @emotion/react */
import 'antd/dist/antd.css';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { friend } from 'src/store/friendStore';
import { css } from '@emotion/react';
import { yearItems, monthItems, dayItems, hourItems, minuteItems, cityItems } from './util';
import InputField from './inputField';
import RadioField from './radioField';
import SelectField from './selectField';
import LeftRightButton from './leftRightButton';

const FriendCreateForm = () => {
  const router = useRouter();
  const nameRef = useRef(null);

  const [name, setName] = useState(false);
  const [gender, setGender] = useState(false);
  const [calendarType, setCalendarType] = useState(false);
  const { control } = useForm();

  const [person, setPerson] = useRecoilState(friend);
  const [formData, setFormData] = useState({
    name: { value: 0, isFilled: false },
    gender: { value: 0, isFilled: false },
    calendarType: { value: 0, isFilled: false },
    year: { value: 0, isFilled: false },
    month: { value: 0, isFilled: false },
    day: { value: 0, isFilled: false },
    hour: { value: 0, isFilled: false },
    minute: { value: 0, isFilled: false },
    city: { value: 0, isFilled: false }
  });

  const nameKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setName((prev) => !prev);
    }
  };

  const genderClick = (e) => {
    e.preventDefault();
    setGender((prev) => !prev);
  };
  const calendarTypeClick = (e) => {
    e.preventDefault();
    setCalendarType((prev) => !prev);
  };
  const yearChange = (year) => {
    setFormData((prev) => {
      return { ...prev, year: { value: year, isFilled: (prev) => !prev } };
    });
  };
  const monthChange = (month) => {
    setFormData((prev) => {
      return { ...prev, month: { value: month, isFilled: (prev) => !prev } };
    });
    console.log('formData', formData);
  };
  const dayChange = (day) => {
    setFormData((prev) => {
      return { ...prev, day: { value: day, isFilled: (prev) => !prev } };
    });
  };
  const hourChange = (hour) => {
    setFormData((prev) => {
      return { ...prev, hour: { value: hour, isFilled: (prev) => !prev } };
    });
  };
  const minuteChange = (minute) => {
    setFormData((prev) => {
      return { ...prev, minute: { value: minute, isFilled: (prev) => !prev } };
    });
  };
  const cityChange = (city) => {
    setFormData((prev) => {
      return { ...prev, city: { value: city, isFilled: (prev) => !prev } };
    });
  };
  const onFinish = (data) => {
    router.replace('/friendSaju');
    createFriend(formData).then((res) => {
      console.log('res', res);
      setPerson(res?.data);
    });
  };

  const createFriend = (data) => {
    return fetch(
      `http://localhost:3000/api/calculator?hour=${data?.hour.value}&minute=${data?.minute.value}&year=${data?.year.value}&month=${data?.month.value}&day=${data?.day.value}`
    ).then((res) => {
      console.log('res', res);
      return res.json();
    });
  };

  return (
    <Form onFinish={onFinish}>
      {!name && (
        <InputField
          name="name"
          label="이름"
          placeholder="무명인"
          ref={nameRef}
          onKeyDown={nameKeyDown}
        />
      )}
      {name && !gender && (
        <div css={fadeInFadeOut}>
          <RadioField
            name="gender"
            label="성별"
            value={[
              { value: 'female', text: '여성' },
              { value: 'male', text: '남성' }
            ]}
            onClick={genderClick}
          />
          <LeftRightButton onClickPrev={nameKeyDown} onClickNext={genderClick} />
        </div>
      )}
      {gender && !calendarType && (
        <div css={fadeInFadeOut}>
          <RadioField
            name="calendarType"
            label="음/양력"
            value={[
              { value: 'solarCalendar', text: '양력' },
              { value: 'moonCalendar', text: '음력' },
              { value: 'leapMonth', text: '윤달' }
            ]}
            onClick={calendarTypeClick}
          />
          <LeftRightButton onClickPrev={genderClick} onClickNext={calendarTypeClick} />
        </div>
      )}
      {calendarType && !formData.year.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={yearItems}
            control={control}
            name="year"
            label="태어난 해"
            required={true}
            placeholder="년"
            onChange={yearChange}
          />
          <LeftRightButton onClickPrev={calendarTypeClick} onClickNext={yearChange} />
        </div>
      )}
      {formData.year.isFilled && !formData.month.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={monthItems}
            control={control}
            name="month"
            label="태어난 달"
            required={true}
            placeholder="월"
            onChange={monthChange}
          />
          <LeftRightButton onClickPrev={yearChange} onClickNext={monthChange} />
        </div>
      )}
      {formData.month.isFilled && !formData.day.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={dayItems}
            control={control}
            name="day"
            label="태어난 날"
            required={true}
            placeholder="일"
            onChange={dayChange}
          />
          <LeftRightButton onClickPrev={monthChange} onClickNext={dayChange} />
        </div>
      )}
      {formData.day.isFilled && !formData.hour.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={hourItems}
            control={control}
            name="hour"
            label="태어난 시"
            required={true}
            placeholder="시"
            onChange={hourChange}
          />
          <LeftRightButton onClickPrev={dayChange} onClickNext={hourChange} />
        </div>
      )}
      {formData.hour.isFilled && !formData.minute.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={minuteItems}
            control={control}
            name="minute"
            label="태어난 분"
            required={true}
            placeholder="분"
            onChange={minuteChange}
          />
          <LeftRightButton onClickPrev={hourChange} onClickNext={minuteChange} />
        </div>
      )}
      {formData.minute.isFilled && (
        <div css={fadeInFadeOut}>
          <SelectField
            items={cityItems}
            control={control}
            name="city"
            label="태어난 지역"
            required={true}
            placeholder="지역"
            onChange={cityChange}
          />
          <LeftRightButton onClickPrev={hourChange} onClickNext={minuteChange} />
        </div>
      )}
      {formData.city.isFilled && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            확인
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};
const fadeInFadeOut = css`
  animation: smoothAppear 1s;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default FriendCreateForm;
