import styled from '@emotion/styled';
import { Form } from 'antd';

const StyledFormItem = styled(Form.Item)`
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

export default StyledFormItem;
