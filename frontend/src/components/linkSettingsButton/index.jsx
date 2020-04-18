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

const SettingsButton = styled.button`
  grid-area: ${props => props.gridSpace};
  color: ${props => props.colorTheme[props.theme].color};
  background-color: ${props => props.isButtonActive ? props.colorTheme[props.theme].background : 'transparent'};
  border: 1px solid ${props => props.colorTheme[props.theme].border};
`;

SettingsButton.defaultProps = {
  colorTheme: theme,
}

const SettingsChaperInput = styled.input`
  transition: all 0.2s;
  transform-origin: left;
  transform: scaleX(${props => props.shouldDisplay ? 1 : 0});
  display: ${props => props.shouldDisplay ? 'inline-block' : "none"};
`;

export default function LinkSettingsButton({ gridSpace, theme, text, currentlyActiveType, type, onClick }) {
  return (
    <>
      <SettingsButton
        isButtonActive={currentlyActiveType === type}
        theme={theme}
        gridSpace={gridSpace}
      >
        {text}
      </SettingsButton>
      {currentlyActiveType === "new_chapter" && type === "new_chapter" &&
        <SettingsChaperInput shouldDisplay={currentlyActiveType === "new_chapter" && type === "new_chapter"} />
      }
    </>
  )
}
