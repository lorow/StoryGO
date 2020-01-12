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
    transition: all 0.2s;
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
  transition: all 0.2s;
  flex-grow: 1;
	height: 100%;
  border: none;
  padding-left: 35px;
  color: ${props => props.shouldBeLighter ? '#535353' : '#9D9D9D'};
  background-color: transparent;
	overflow: hidden;
`;

const DecorativeSpan = styled.span`
  transition: all 0.2s;
  margin-right: 40px;
  font-size: 40px;
  height: 100%;
  line-height: 50px;
  opacity: ${props => props.shouldDisappear ? '100' : '0'}%;
`;

export default function StoryLinkField(props) {

  return (
    <StoryBarInputLabel shouldBeDashed={!props.isLinkBeingEdited}>
      <StoryBarInput
        placeholder="Add another link"
        shouldBeLighter={!props.isLinkBeingEdited}
        onChange={(env) => console.log("changed")}
        onFocus={(env) => props.setIsLinkBeingEdited(true)}
        onBlur={(env) => props.setIsLinkBeingEdited(false)}
      />
      <DecorativeSpan shouldDisappear={!props.isLinkBeingEdited}>+</DecorativeSpan>
    </StoryBarInputLabel>
  )
}