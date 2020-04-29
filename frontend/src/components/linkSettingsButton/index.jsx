import React from 'react';
import styled from 'styled-components';

const theme = {
  main: {
    color: "white",
    border: "#0085FF",
    background: "#0085FF"
  },
  danger: {
    color: "#FF2E00",
    border: "#FF2E00",
    background: "#FF2E00"
  }
}

const LinkSettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: ${props => props.gridTile};

  &:disabled{
    opacity: .8;
  }
`;

const SettingsButton = styled.button`
  color: ${props => props.colorTheme[props.theme].color};
  background-color: ${props => props.isButtonActive ? props.colorTheme[props.theme].background : 'transparent'};
  border: 1px solid ${props => props.colorTheme[props.theme].border};
  width: 100%;
  &:disabled{
    opacity: .5;
  }
`;

SettingsButton.defaultProps = {
  colorTheme: theme,
}

const SettingsChaperInput = styled.input`
  transition: all 0.2s;
  transform-origin: left;
  transform: scaleX(${props => props.shouldDisplay ? 1 : 0});
  width: 40px;
  display:block;
  background: transparent;
  color: ${props => props.colorTheme["main"].color};
  border: 1px solid ${props => props.colorTheme["main"].border};
  text-align: center;
`;

SettingsChaperInput.defaultProps = {
  colorTheme: theme,
}

export default function LinkSettingsButton({ gridTile, theme, text, currentlyActiveType, type, onClick, chapterNumber, handleChapterInput, disabled }) {
  return (
    <LinkSettingsContainer gridTile={gridTile}>
      <SettingsButton
        isButtonActive={currentlyActiveType === type}
        theme={theme}
        onClick={() => { onClick(type) }}
        disabled={disabled}
      >
        {text}
      </SettingsButton>
      {type === "new_chapter" &&
        <SettingsChaperInput
          onChange={handleChapterInput}
          value={chapterNumber}
          shouldDisplay={currentlyActiveType === "new_chapter" && type === "new_chapter"}
        />
      }
    </LinkSettingsContainer>
  )
}
