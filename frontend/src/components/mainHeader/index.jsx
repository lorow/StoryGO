import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 47px;
  color: #FFFFFF;
`;

export default function (props) {
  return (
    <HeaderTitle>{props.children}</HeaderTitle>
  )
}