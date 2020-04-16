import React from 'react';
import StoryLinkContainer from '../../../containers/storyLinkContainer'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const LinkList = styled.ul`
  max-height: 60vh;
  height: 40vh;
  overflow-y:auto;
  overflow-x: visible;
`;

export function LinkEditingSubPage(props) {
  const links = useSelector(state => state.links);
  return (
    <LinkList>
      {
        links &&
        links.map(
          entry => <StoryLinkContainer isInitial={entry.id === 0} />
        )
      }
    </LinkList>
  )
}