import React from 'react';
import styled from 'styled-components';

const HiddenInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Cover = styled.form`
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

const UploadIcon = styled.label`
  position:absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  background-image: url("/upload.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: block;
  width: 80px;
  height: 80px;
`;

export default function CoverImageUpload({ uploadedCover, handleUpload, hasAnImageBeenUploaded }) {
  return (
    <Cover>
      <HiddenInput onChange={handleUpload} id="image_upload" name="miniature" type="file" />
      {!hasAnImageBeenUploaded &&
        <UploadIcon htmlFor="image_upload" />
      }
      <CoverImage src={uploadedCover ? uploadedCover.url : ""} />
      <CoverQuestionMark src={"/questionmark.svg"} />
    </Cover>
  )
}