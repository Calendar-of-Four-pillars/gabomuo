/** @jsxImportSource @emotion/react */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Button } from 'antd';

const LeftRightButton = ({
  onClickPrev,
  onClickNext
}: {
  onClickPrev: (event: React.MouseEvent<HTMLElement | MouseEvent>) => void;
  onClickNext?: any;
}) => {
  return (
    <div css={Buttons}>
      <Button type="primary" ghost icon={<ArrowLeftOutlined />} onClick={onClickPrev} />
      <Button
        type="primary"
        ghost
        icon={<ArrowRightOutlined />}
        onClick={onClickNext}
        css={RightButton}
      />
    </div>
  );
};
const Buttons = css`
  display: flex;
  justify-content: space-between;
`;

const RightButton = css`
  margin-left: 10px;
`;
export default LeftRightButton;
