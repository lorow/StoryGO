import React, { useState, useRef, useEffect } from 'react';
import StoryLinkField from './storyLinkField';
import StoryLinkSettingsBar from './storyLinkSettingsBar';
import styled from 'styled-components';
import { useOnClickOutside, usePrevious } from '../hooks';
import { UpdateLink, RemoveLink, Addlink } from '../actions'
import { useDispatch } from 'react-redux';

const StoryFieldContainer = styled.li`
  width: 50vw;
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

export default function EditableLink({ isInitial, id, isTheLatest }) {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  const [hasAddedNext, setHasAddedNext] = useState(false);
  const [hasText, setHasText] = useState(false);
  const dispatch = useDispatch();

  const ref = useRef();
  useOnClickOutside(ref, () => setIsLinkBeingEdited(false));

  useEffect(() => {
    if (hasText && !hasAddedNext) {
      dispatch(Addlink());
      setHasAddedNext(true);
    }
  }, [dispatch, hasText, id, isInitial, hasAddedNext])

  const handleLinkChange = (e) => {
    setHasText(Boolean(e.target.value))
    dispatch(UpdateLink({ id: id, data: { link: e.target.value } }))
  }

  return (
    <StoryFieldContainer ref={ref}>
      <StoryLinkField
        isInitial={isInitial}
        isLinkBeingEdited={isLinkBeingEdited}
        hasText={hasText}
        onClick={() => setIsLinkBeingEdited(true)}
        handleLinkChange={handleLinkChange}
      />
      <StoryLinkSettingsBar shouldBeOpen={isLinkBeingEdited} />
    </StoryFieldContainer>
  )
};
