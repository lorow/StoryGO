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

export default function EditableLink({ isInitial, selfEntry }) {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  const [hasAddedNext, setHasAddedNext] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();
  useOnClickOutside(ref, () => setIsLinkBeingEdited(false));

  useEffect(() => {
    if (selfEntry.link && !hasAddedNext) {
      dispatch(Addlink());
      setHasAddedNext(true);
    }

    if (!isInitial && !selfEntry.link && hasAddedNext) {
      // it's empty, we should remove it
      dispatch(RemoveLink(selfEntry.id))
    }
  }, [dispatch, selfEntry, isInitial, hasAddedNext])

  const handleLinkChange = (e) => {
    dispatch(UpdateLink({ id: selfEntry.id, data: { link: e.target.value } }))
  }

  return (
    <StoryFieldContainer ref={ref}>
      <StoryLinkField
        isInitial={isInitial}
        isLinkBeingEdited={isLinkBeingEdited}
        hasText={Boolean(selfEntry.link)}
        onClick={() => setIsLinkBeingEdited(true)}
        handleLinkChange={handleLinkChange}
      />
      <StoryLinkSettingsBar
        activeButtonType={selfEntry.linkType ? selfEntry.linkType.type : ""}
        shouldBeOpen={isLinkBeingEdited}
      />
    </StoryFieldContainer>
  )
};
