import React, { useState, useRef, useEffect } from 'react';
import StoryLinkField from '../../components/storyLinkField';
import StoryLinkEditingBar from '../../components/storyLinkEditingBar';
import styled from 'styled-components';
import { useOnClickOutside } from '../../hooks';
import { AddTemporaryLinkEntry, RemoveTemporaryLinkEntry } from '../../actions'
import { useDispatch } from 'react-redux';

const StoryFieldContainer = styled.li`
  width: 50vw;
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

const StoryLinkContainer = React.memo((props) => {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  const [hasText, setHasText] = useState(false);

  const dispatch = useDispatch();

  const ref = useRef();
  useOnClickOutside(ref, () => setIsLinkBeingEdited(false));

  // const handleLinkChange = (e) => {
  //   setHasText(e.target.value !== "")
  //   // this should later update the redux state
  // }

  const handleLinkClick = () => {
    setIsLinkBeingEdited(true)
    if (!hasText)
      dispatch(AddTemporaryLinkEntry())
  }

  return (
    <StoryFieldContainer onClick={handleLinkClick}>
      <StoryLinkField
        isInitial={props.isInitial}
        isLinkBeingEdited={isLinkBeingEdited}
        // its so that the border stay solid even if the user isn't currently editing anything
        // handleLinkChange={handleLinkChange}
        hasText={hasText}
      />
      <StoryLinkEditingBar shouldBeOpen={isLinkBeingEdited} />
    </StoryFieldContainer>
  )
});

export default StoryLinkContainer;