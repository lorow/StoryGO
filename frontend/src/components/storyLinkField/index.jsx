import React from 'react';
import styled from 'styled-components';

const StoryBarInputLabel = styled.label`
  width: 100%;
  height: 50px;
  
  background-color: transparent;
  display: block;
  overflow: hidden;
  position: relative;
  text-align: center;

  display: flex;
  flex-direction: row;

  &:before {
    content: "";
    position: absolute;
    border: 10px dashed #535353;
    top: -7px;
    bottom: -7px;
    left: -7px;
    right: -7px;
  }
`;

const StoryBarInput = styled.input`
  flex-grow: 1;
	height: 100%;
  border: none;
  padding-left: 35px;
  color: #535353;
  background-color: transparent;
	overflow: hidden;
`;

const DecorativeSpan = styled.span`
  margin-right: 40px;
  font-size: 40px;
  height: 100%;
  line-height: 50px;
`;

export default function StoryLinkField(props) {
  return (
    <StoryBarInputLabel >
      <StoryBarInput placeholder="Add another link" />
      <DecorativeSpan>+</DecorativeSpan>
    </StoryBarInputLabel>
  )
}