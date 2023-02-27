// eslint-disable-next-line import/no-extraneous-dependencies
import { css, Global } from '@emotion/react';

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
          font-family: 'noto sans';
          line-height: 1;
          background-color: black;
          color: white;
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
        @media screen and (max-width: 479px) {
          body {
            display: block;

            padding: 0 30px;
          }
          /* label {
            color: white;
          } */
        }
      `}
    />
  );
};

export default GlobalStyle;
