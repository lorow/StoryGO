import React from 'react';
import StoryLinkContainer from '../../../containers/storyLinkContainer'
import styled from 'styled-components';

const LinkList = styled.ul`
  max-height: 60vh;
  height: 40vh;
  overflow-y:auto;
  overflow-x: visible;
`;

export function LinkEditingSubPage(props) {
  return (
    <LinkList>
      <StoryLinkContainer isInitial />
      <StoryLinkContainer />
    </LinkList>
  )
}