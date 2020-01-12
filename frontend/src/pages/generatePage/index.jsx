import React from 'react';
import StoryLinkContainer from '../../containers/storyLinkContainer'


function GeneratePage(props) {
  return (
    // here will be displayed the currently active page, not the editing stuff
    // the editing stuff will be put into a separate page
    <ul>
      <StoryLinkContainer></StoryLinkContainer>
      <StoryLinkContainer></StoryLinkContainer>
    </ul>
  )
}

export default GeneratePage;