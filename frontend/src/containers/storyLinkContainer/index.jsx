import React, { useState } from 'react';
import StoryLinkField from '../../components/storyLinkField';
import StoryLinkEditingBar from '../../components/storyLinkEditingBar';
import styled from 'styled-components';


const StoryFieldContainer = styled.li`
  &:not(:first-of-type){
    margin-top: 30px;
  }
`;

export default function StoryLinkContainer(pros) {
  return (
    <StoryFieldContainer>
      <StoryLinkField></StoryLinkField>
      <StoryLinkEditingBar></StoryLinkEditingBar>
    </StoryFieldContainer>
  )
}