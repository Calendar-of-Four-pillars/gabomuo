import { Input, Form, Select, Radio, Button } from 'antd';
import { forwardRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

const SelectField = ({ items, control, name, label, required, placeholder, onChange }, ref) => {
  return (
    <Controller
      render={() => (
        <Form.Item
          name={name}
          label={label}
          labelCol={{ span: 24 }}
          rules={[
            {
              required,
              message: `${label}를 입력해주세요.`
            }
          ]}
        >
          <Select
            size="large"
            placeholder={placeholder}
            options={items}
            onChange={(velue) => onChange(velue)}
            ref={ref}
          />
        </Form.Item>
      )}
      control={control}
      name={name}
    />
  );
};

export default forwardRef(SelectField);
