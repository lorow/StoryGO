import React, { useEffect } from 'react';
import StoryLinkField from '../../../components/storyLinkField/';
import LinkSettingsButton from '../../../components/linkSettingsButton';
import styled from 'styled-components';

const Container = styled.article`
  width: 50vw;
  margin-bottom: 30px;
`;

const CoverContainer = styled.section`

  margin-top: 30px;

  display: grid;
  height: 40vh;
  width: 40vh;

  margin-left: auto;
  margin-right: auto;

  grid-template-columns: 2fr 1fr;
  grid-template-rows: 7fr 1fr 1fr;
  grid-gap: 20px;

  grid-template-areas: "image empty" "image nocover" "image resetbtn";
`;

const Cover = styled.figure`
  grid-area: image;
  background-color: grey;
  position: relative;
  border: 3px solid white;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CoverQuestionMark = styled.figcaption`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 13px;
  right: 13px;
`;

export function FinishingEditingSubPage(props) {
  const onEnter = props.onEnter;
  const validateProceed = props.validateProceed
  useEffect(() => {
    onEnter(2);
    validateProceed(true);
  }, [onEnter, validateProceed])
  return (
    <Container>
      <StoryLinkField hasText isLinkBeingEdited placeholder={"Your custom title. Can be empty, the tilte from the first link will be used"} />
      <CoverContainer>
        <Cover>
          <CoverImage />
          <CoverQuestionMark />
        </Cover>
        <LinkSettingsButton gridTile={"nocover"} type={"new_story"} text={"No cover"} theme={"main"} />
        <LinkSettingsButton gridTile={"resetbtn"} type={"delete"} text={"Reset"} theme={"danger"} />
      </CoverContainer>
    </Container>
  )
}