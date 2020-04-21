import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateCover } from '../../../actions/CoverActions';
import StoryLinkField from '../../../components/storyLinkField';
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

const CoverQuestionMark = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 13px;
  right: 13px;
`;

const UploadIcon = styled.img`
  position:absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);

  width: 80px;
  height: 80px;
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

  useEffect(() => { setHasAnImageBeenUploaded(epubPage.cover !== "no_cover") }, [epubPage.cover])

  const handleResetClick = () => { dispatch(UpdateCover({ cover: "no_cover" })); }

  const handleTitleChange = (e) => { dispatch(UpdateCover({ title: e.target.value })) }

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
        <Cover>
          {!hasAnImageBeenUploaded &&
            <UploadIcon src={"/upload.svg"} />
          }
          <CoverImage />
          <CoverQuestionMark src={"/questionmark.svg"} />
        </Cover>
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