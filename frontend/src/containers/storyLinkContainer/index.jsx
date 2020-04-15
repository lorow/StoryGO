import React, { useState } from 'react';
import StoryLinkField from '../../components/storyLinkField';
import StoryLinkEditingBar from '../../components/storyLinkEditingBar';
import styled from 'styled-components';


const StoryFieldContainer = styled.li`
  width: 50vw;
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

export default function StoryLinkContainer(pros) {
  const [isLinkBeingEdited, setIsLinkBeingEdited] = useState(false);
  return (
    <StoryFieldContainer>
      <StoryLinkField
        isLinkBeingEdited={isLinkBeingEdited}
        setIsLinkBeingEdited={setIsLinkBeingEdited}
      />
      <StoryLinkEditingBar shouldBeOpen={isLinkBeingEdited}></StoryLinkEditingBar>
    </StoryFieldContainer>
  )
}