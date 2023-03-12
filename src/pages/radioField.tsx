import styled from '@emotion/styled';
import { Form, Radio } from 'antd';
import { useEffect } from 'react';
import { COLOR } from 'src/styles/style';

import { delay } from './util';

const RadioField = ({ name, label, value, onClick }) => {
  return (
    <Form.Item name={name} label={label} labelCol={{ span: 24 }}>
      <StyledRadioGroup defaultValue={value[0].value} buttonStyle="solid" size="large">
        {value.map((i) => (
          <StyledRadioButton key={i.value} value={i.value} onClick={onClick}>
            {i.text}
          </StyledRadioButton>
        ))}
      </StyledRadioGroup>
    </Form.Item>
  );
};

const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  margin: 0 -3%;
`;
const StyledRadioButton = styled(Radio.Button)`
  width: 100%;
  margin: 0 3%;
  border: none;
  text-align: center;

  background: ${COLOR.Secondary};
  color: ${COLOR.Primary};
`;
export default RadioField;
