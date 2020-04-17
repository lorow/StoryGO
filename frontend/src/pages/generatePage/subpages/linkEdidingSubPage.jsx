import React from 'react';
import EditableLink from '../../../components/EditableLink'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const LinkList = styled.ul`
  max-height: 60vh;
  height: 40vh;
  overflow-y:auto;
  overflow-x: visible;
`;

export function LinkEditingSubPage() {
  const links = useSelector(state => state.links);
  return (
    <LinkList>
      {links && links.map(entry => <EditableLink
        key={entry.id}
        isTheLatest={entry.id === links[links.length - 1].id}
        isInitial={entry.id === 0} {...entry}
      />)}
    </LinkList>
  )
}