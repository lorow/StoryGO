import React, { useState, useRef, useCallback } from 'react';
import StoryLinkField from './storyLinkField';
import StoryLinkEditingBar from './storyLinkEditingBar';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { AddTemporaryLinkEntry, RemoveTemporaryLinkEntry } from '../actions'
import { useDispatch } from 'react-redux';

const StoryFieldContainer = styled.li`
  width: 50vw;
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

export default function EditableLink({ isInitial }) {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  const [hasText, setHasText] = useState(false);

  const dispatch = useDispatch();

  const ref = useRef();
  useOnClickOutside(ref, () => setIsLinkBeingEdited(false));

  const handleLinkClick = useCallback(() => {

  }, [])

  const handleLinkChange = (e) => {

  }

  return (
    <StoryFieldContainer ref={ref}>
      <StoryLinkField
        isInitial={isInitial}
        isLinkBeingEdited={isLinkBeingEdited}
        hasText={hasText}
        onClick={handleLinkClick}
        handleLinkChange={handleLinkChange}
      />
      <StoryLinkEditingBar shouldBeOpen={isLinkBeingEdited} />
    </StoryFieldContainer>
  )
};
