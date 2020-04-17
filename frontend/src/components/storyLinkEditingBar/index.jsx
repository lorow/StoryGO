import React from 'react';
import styled from 'styled-components';


const EditingBar = styled.div`
  transition: all 0.2s;
  transform-origin: top;
  opacity: ${props => props.shouldBeOpen ? 1 : 0};
  height: ${props => props.shouldBeOpen ? '30px' : '0px'};

  display: flex;
  flex-direction: row;
`;



const StoryLinkEditingBar = React.memo(function ({ shouldBeOpen }) {
  return (
    <EditingBar shouldBeOpen={shouldBeOpen}>
    </EditingBar>
  )
})

export default StoryLinkEditingBar