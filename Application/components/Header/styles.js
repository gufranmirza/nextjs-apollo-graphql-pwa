// @flow

import styled from 'styled-components';

import { ViewPort, BodyPadding } from '../../theme/body';

const Root = styled.div`
  position: absolute;
  display: block;
  z-index: 500;
  width: 100%;
  font-size: 16px;
  background: #fff;
  color: rgba(0, 0, 0, 0.54);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
  height: 60px;
`;

const ViewBox = styled.div`
  max-width: ${ViewPort};
  padding: ${BodyPadding};
  text-align: center;
  margin: 0 auto;
`;

export { Root, ViewBox };
