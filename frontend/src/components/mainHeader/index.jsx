import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  color: #FFFFFF;
`;

export default function (props) {
  return (
    <HeaderTitle>{props.children}</HeaderTitle>
  )
}