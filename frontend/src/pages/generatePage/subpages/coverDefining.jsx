import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetCoverTitle, SetCoverMiniature } from '../../../actions/CoverActions';
import StoryLinkField from '../../../components/storyLinkField';
import CoverImageUpload from '../../../components/CoverImageUpload';
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

export function CoverDefiningPage(props) {
  const onEnter = props.onEnter;
  const validateProceed = props.validateProceed;
  const [hasAnImageBeenUploaded, setHasAnImageBeenUploaded] = useState(false);
  const epubPage = useSelector(state => state.epubPage);
  const dispatch = useDispatch();

  useEffect(() => {
    onEnter(2);
    validateProceed(true);
  }, [onEnter, validateProceed])

  useEffect(() => { setHasAnImageBeenUploaded(epubPage.cover !== "no_cover"); }, [epubPage.cover])

  const handleResetClick = () => { dispatch(SetCoverMiniature("no_cover")); }

  const handleTitleChange = e => { dispatch(SetCoverTitle(e.target.value)) }

  const handleImageUpload = e => {
    const file = e.target.files[0];
    dispatch(SetCoverMiniature({
      file: file,
      url: URL.createObjectURL(file),
    }))
  }

  return (
    <Container>
      <StoryLinkField
        onChange={handleTitleChange}
        hasText
        isLinkBeingEdited
        placeholder={"Your custom title. Can be empty, the tilte from the first link will be used"}
        value={epubPage.title}
      />
      <CoverContainer>

        <CoverImageUpload
          hasAnImageBeenUploaded={hasAnImageBeenUploaded}
          uploadedCover={epubPage.cover}
          handleUpload={handleImageUpload}
        />

        <LinkSettingsButton
          gridTile={"resetbtn"}
          onClick={handleResetClick}
          type={"delete"}
          text={"Reset"}
          theme={"danger"}
          disabled={"no_cover" === epubPage.cover}
        />
      </CoverContainer>
    </Container>
  )
}