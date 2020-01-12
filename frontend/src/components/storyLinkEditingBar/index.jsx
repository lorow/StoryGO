import React from 'react';
import styled from 'styled-components';


const EditingBar = styled.h1`
  transition: all 0.2s;
  transform-origin: top;
  opacity: ${props => props.shouldBeOpen ? 1 : 0};
  transform: ${props => props.shouldBeOpen ? 'scaleY(1)' : 'scaleY(0)'};
`;

export default function StoryLinkEditingBar(props) {
  return (
    <EditingBar shouldBeOpen={props.shouldBeOpen}>awd</EditingBar>
  )
}