import React from 'react';
import styled from 'styled-components';
import LinkSettingsButton from '../linkSettingsButton';

const EditingBar = styled.div`
  transition: all 0.2s;
  transform-origin: top;
  opacity: ${props => props.shouldBeOpen ? 1 : 0};
  height: ${props => props.shouldBeOpen ? '55px' : '0px'};
  display: grid;
  grid-template-rows: minmax(0px, 20px) 1fr;
  grid-template-columns: 1fr 1.3fr minmax(0px, 6fr) 1fr;
  grid-gap: 0px 20px;
  grid-template-areas: "spacer spacer spacer spacer" "story chapter empty delete";
`;

export default function StoryLinkSettingsBar({ shouldBeOpen, activeButtonType }) {
  return (
    <EditingBar shouldBeOpen={shouldBeOpen}>
      <LinkSettingsButton
        gridSpace={"story"}
        theme={"main"}
        text={"New Story"}
        type={"new_story"}
        currentlyActiveType={activeButtonType}
      />
      <LinkSettingsButton
        gridSpace={"chapter"}
        theme={"main"}
        text={"New chapter"}
        type={"new_chapter"}
        currentlyActiveType={activeButtonType}
      />
      <LinkSettingsButton
        gridSpace={"delete"}
        theme={"danger"}
        text={"Delete"}
        type={"delete"}
      />
    </EditingBar>
  )
}