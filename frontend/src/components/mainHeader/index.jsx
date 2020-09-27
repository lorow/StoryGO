import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.biggerTitle ? 4.5 : 2.5)}rem;
  line-height: 47px;
  color: #ffffff;
`;

export default function (props) {
  return (
    <HeaderTitle biggerTitle={props.biggerTitle}>{props.children}</HeaderTitle>
  );
}
