import React, { useState, useRef, useEffect } from 'react';
import StoryLinkField from './storyLinkField';
import StoryLinkSettingsBar from './storyLinkSettingsBar';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { UpdateLink, RemoveLink, Addlink } from '../actions/LinkActions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const StoryFieldContainer = styled.li`
  width: 50vw;
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

export default function EditableLink({ isInitial, selfEntry }) {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();
  useOnClickOutside(ref, () => setIsLinkBeingEdited(false));

  useEffect(() => {
    if (selfEntry.link && !selfEntry.hasAddedNext) {
      dispatch(Addlink());
      dispatch(UpdateLink({ id: selfEntry.id, data: { hasAddedNext: true } }));
    }

    if (!isInitial && !selfEntry.link && selfEntry.hasAddedNext) {
      // it's empty, we should remove it
      if (!isLinkBeingEdited)
        dispatch(RemoveLink(selfEntry.id))
    }
  }, [dispatch, selfEntry, isInitial, isLinkBeingEdited])

  const handleLinkChange = (e) => {
    dispatch(UpdateLink({ id: selfEntry.id, data: { link: e.target.value } }))
  }

  const handleBarButtonsClick = (buttonType) => {
    switch (buttonType) {
      case "new_story":
        return dispatch(UpdateLink({ id: selfEntry.id, data: { linkType: { type: "new_story", data: null } } }))
      case "new_chapter":
        return dispatch(UpdateLink({ id: selfEntry.id, data: { linkType: { type: "new_chapter", data: 0 } } }))
      case "delete":
        if (!isInitial)
          return dispatch(RemoveLink(selfEntry.id))
        else return;

      default: return;
    }
  }

  const handleChapterIDChange = (e) => {
    const newID = e.target.value;
    if (!isNaN(newID))
      dispatch(UpdateLink({ id: selfEntry.id, data: { linkType: { type: "new_chapter", data: newID } } }))
    else
      toast.error("The chapter ID must be a number")
  }

  return (
    <StoryFieldContainer ref={ref}>
      <StoryLinkField
        isInitial={isInitial}
        isLinkBeingEdited={isLinkBeingEdited}
        hasText={Boolean(selfEntry.link)}
        onClick={() => setIsLinkBeingEdited(true)}
        entry={selfEntry}
        handleLinkChange={handleLinkChange}
      />
      <StoryLinkSettingsBar
        activeButtonType={selfEntry.linkType ? selfEntry.linkType.type : ""}
        shouldBeOpen={isLinkBeingEdited}
        onClick={handleBarButtonsClick}
        chapterNumber={selfEntry.linkType.data}
        handleChapterInput={handleChapterIDChange}
      />
    </StoryFieldContainer>
  )
};
