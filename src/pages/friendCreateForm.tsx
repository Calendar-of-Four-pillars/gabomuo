import 'antd/dist/antd.css';
import { Input, Form, Select, Radio, Button } from 'antd';
import type { SelectProps } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { friend } from 'src/store/friendStore';

const FriendCreateForm = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm();
  const [person, setPerson] = useRecoilState(friend);

  const handleFocus = (e) => {
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const onSubmit = (data) => {
    router.replace('/friendSaju');
    createFriend(data).then((res) => {
      console.log('res', res);
      setPerson(res?.data);
    });
  };

  const createFriend = (data) => {
    return fetch(
      `http://localhost:3000/api/calculator?hour=${data?.hour}&minute=${data?.minute}&year=${data?.year}&month=${data?.month}&day=${data?.day}`
    ).then((res) => {
      console.log('res', res);
      return res.json();
    });
  };
  const year: SelectProps['options'] = [];
  const month: SelectProps['options'] = [];
  const day: SelectProps['options'] = [];
  const hour: SelectProps['options'] = [];
  const minute: SelectProps['options'] = [];
  const city: SelectProps['options'] = [
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

  for (let i = 1899; i < 2100; i += 1) {
    year.push({
      label: i + 1,
      value: i + 1
    });
  }

  for (let i = 0; i < 12; i += 1) {
    month.push({ label: i + 1, value: i + 1 });
  }

  for (let i = 0; i < 31; i += 1) {
    day.push({
      label: i + 1,
      value: i + 1
    });
  }

  for (let i = 0; i < 12; i += 1) {
    hour.push({
      label: i + 1,
      value: i + 1
    });
  }

  for (let i = 0; i < 60; i += 1) {
    minute.push({
      label: i + 1,
      value: i + 1
    });
  }

  return (
    <Form onFinish={onSubmit}>
      <CustomFormItem name="name" label="이름">
        <Input placeholder="무명인" />
      </CustomFormItem>
      <CustomFormItem name="name2" label="이름2">
        <Input placeholder="무명인" />
      </CustomFormItem>
      <CustomFormItem name="gender" label="성별">
        <CustomRadioGroup defaultValue="female" buttonStyle="solid">
          <Radio.Button value="male">남성</Radio.Button>
          <Radio.Button value="female">여성</Radio.Button>
        </CustomRadioGroup>
      </CustomFormItem>
      <CustomFormItem name="calendarType" label="음/양력">
        <CustomRadioGroup defaultValue="solarCalendar" buttonStyle="solid">
          <Radio.Button value="solarCalendar">양력</Radio.Button>
          <Radio.Button value="moonCalendar">음력</Radio.Button>
          <Radio.Button value="leapMonth">윤달</Radio.Button>
        </CustomRadioGroup>
      </CustomFormItem>
      <Controller
        render={() => (
          <CustomFormItem
            name="year"
            label="태어난 해"
            rules={[
              {
                required: true,
                message: '태어난 해를 입력해주세요.'
              }
            ]}
          >
            <Select placeholder="년" options={year} />
          </CustomFormItem>
        )}
        control={control}
        name="year"
      />
      <Controller
        render={() => (
          <CustomFormItem
            name="month"
            label="태어난 달"
            rules={[
              {
                required: true,
                message: '태어난 달을 입력해주세요.'
              }
            ]}
          >
            <Select placeholder="월" options={month} />
          </CustomFormItem>
        )}
        control={control}
        name="month"
      />
      <Controller
        render={() => (
          <CustomFormItem
            name="day"
            label="태어난 날"
            rules={[
              {
                required: true,
                message: '태어난 날을 입력해주세요.'
              }
            ]}
          >
            <Select placeholder="일" options={day} />
          </CustomFormItem>
        )}
        control={control}
        name="day"
      />
      <Controller
        render={() => (
          <CustomFormItem name="hour" label="태어난 시">
            <Select placeholder="시" options={hour} />
          </CustomFormItem>
        )}
        control={control}
        name="hour"
        defaultValue={0}
      />
      <Controller
        render={() => (
          <CustomFormItem name="minute" label="태어난 분">
            <Select placeholder="분" options={minute} />
          </CustomFormItem>
        )}
        control={control}
        name="minute"
        defaultValue={0}
      />
      <Controller
        render={() => (
          <CustomFormItem name="city" label="태어난 지역">
            <Select placeholder="지역" options={city} />
          </CustomFormItem>
        )}
        control={control}
        name="city"
      />
      <CustomFormItem>
        <Button type="primary" htmlType="submit">
          확인
        </Button>
      </CustomFormItem>
    </Form>
  );
};

const CustomRadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: space-between;
`;

const CustomFormItem = styled(Form.Item)`
  > div > div > label {
    color: white;
  }

  > div > div > div > div > div > label {
    width: 30%;
  }
`;

export default FriendCreateForm;
