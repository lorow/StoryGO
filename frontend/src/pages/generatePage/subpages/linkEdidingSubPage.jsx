import React, { useEffect } from 'react';
import EditableLink from '../../../components/EditableLink'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const LinkList = styled.ul`
  max-height: 60vh;
  height: 40vh;
  overflow-y:auto;
  overflow-x: visible;
  margin-bottom: 30px;
`;

export function LinkEditingSubPage(props) {
  const links = useSelector(state => state.links);
  const onEnter = props.onEnter;
  const validateProceed = props.validateProceed
  useEffect(() => { onEnter(1) }, [onEnter])

  useEffect(() => {
    validateProceed(links.length >= 1 && links[0].link)
  }, [links, validateProceed])

  return (
    <LinkList>
      {links && links.map(entry => <EditableLink
        key={entry.id}
        isInitial={entry.id === 0}
        selfEntry={entry}
      />)}
    </LinkList>
  )
}