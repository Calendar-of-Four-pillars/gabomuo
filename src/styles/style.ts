// eslint-disable-next-line import/prefer-default-export
import { css } from '@emotion/react';

export const COLOR = {
  Primary: '#448be2',
  Secondary: '#222A41',
  // Secondary: '#EDF5FF',
  Tree: '#00B050',
  Fire: '#F35252',
  Soil: '#F8DA4A',
  Iron: '#fff',
  Water: '#37393D'
};

export const GANZICOLOR = ['#00B050', '#F35252', '#F8DA4A', '#fff', '#37393D'];

export const ganjiBox = css`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 8px;
`;
export const ganjiText = css`
  font-weight: 700;
  font-size: 40px;

  color: #ffffff;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
`;
