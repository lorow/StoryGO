import React from 'react';
import styled from 'styled-components';


const EditingBar = styled.div`
  transition: all 0.2s;
  transform-origin: top;
  opacity: ${props => props.shouldBeOpen ? 1 : 0};
  height: ${props => props.shouldBeOpen ? '30px' : '0px'};
  background-color: red;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr minmax(0px, 6fr) 1fr;
`;

export default function StoryLinkSettingsBar({ shouldBeOpen }) {
  return (
    <EditingBar shouldBeOpen={shouldBeOpen}>
    </EditingBar>
  )
}