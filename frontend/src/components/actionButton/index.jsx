import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
color:white;
width: ${props => props.isBigger ? 348 : 281}px;
height: ${props => props.isBigger ? 83 : 67}px;
background-color: ${ props => props.isCurrentlyActive ? '#0085FF' : 'transparent'};
border: 3px solid ${props => props.isCurrentlyActive ? '#303030' : '#0085FF'};
border-radius: 8px;
box-shadow: 0px 4px 4px #000000;
`;

export default function ActionButton(props) {
  return (
    <Button
      isBigger={props.isBigger}
      isCurrentlyActive={props.isCurrentlyActive}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}