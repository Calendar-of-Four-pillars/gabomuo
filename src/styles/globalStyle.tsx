// eslint-disable-next-line import/no-extraneous-dependencies
import { css, Global } from '@emotion/react';
import { COLOR } from './style';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 30px;
          color: white;
          background-color: black;
          color: white;
        }
        .ant-form {
          width: 300px;
        }
        .ant-form-item-label {
          margin-bottom: 15px;
          > label {
            font-size: 18px;
            letter-spacing: 2px;
            color: white;
          }
        }
        .ant-radio-button-checked {
          background-color: ${COLOR.Primary};
        }

        .ant-radio-button-wrapper:not(:first-child)::before {
          display: none;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* iPhone X & 13 Mini Viewport (Safari 주소 표시줄 및 하단 바 포함): 375 * 812 */
        /* iPhone 14 Pro: 393 * 852 */
        /* iPhone 14 Pro Max: 430 * 932 */
        /* Z Flip: 412 * 1004  <div class="ant-col ant-form-item-control">flex*/
        @media screen and (max-width: 500px) {
        }
      `}
    />
  );
};

export default GlobalStyle;
