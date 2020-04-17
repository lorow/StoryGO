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
  // const links = useSelector(state => state.links);
  return (
    <LinkList>
      <EditableLink key={0} isInitial />
    </LinkList>
  )
}