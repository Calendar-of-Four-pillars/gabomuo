import { forwardRef, useEffect } from 'react';
import { Input, Form } from 'antd';
import styled from '@emotion/styled';
import { COLOR } from 'src/styles/style';

const InputField = ({ name, label, placeholder, onKeyDown }, ref) => {
  return (
    <Form.Item name={name} label={label} labelCol={{ span: 24 }}>
      <StyledInput placeholder={placeholder} ref={ref} onKeyDown={onKeyDown} />
    </Form.Item>
  );
};

const StyledInput = styled(Input)`
  background: black;
  border: 0;
  border-bottom: 1px solid ${COLOR.Primary};
  transition: 0.3 ease;
  font-size: 20px;
  :focus,
  :active {
    color: ${COLOR.Primary};
    box-shadow: none;
  }
`;

export default forwardRef(InputField);
