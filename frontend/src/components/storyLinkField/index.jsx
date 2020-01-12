import React, { useState } from 'react';
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
      border: 10px ${props => props.shouldBeDashed ? 'dashed #535353' : 'solid white'};
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
  color: ${props => props.shouldBeLighter ? '#535353' : '#9D9D9D'};
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

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  if (isBeingEdited) {
    return (
      <StoryBarInputLabel shouldBeDashed={!isBeingEdited}>
        <StoryBarInput placeholder="Add another link"
          onChange={(env) => console.log("changed")}
          onFocus={(env) => setIsBeingEdited(true)}
          onBlur={(env) => setIsBeingEdited(false)}
        />
      </StoryBarInputLabel>
    )
  }
  else {
    return (<StoryBarInputLabel shouldBeDashed={!isBeingEdited}>
      <StoryBarInput placeholder="Add another link"
        onChange={(env) => console.log("changed")}
        onFocus={(env) => setIsBeingEdited(true)}
        onBlur={(env) => setIsBeingEdited(false)}
      />
      <DecorativeSpan>+</DecorativeSpan>
    </StoryBarInputLabel>)
  }
}