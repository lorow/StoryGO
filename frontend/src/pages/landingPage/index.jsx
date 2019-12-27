import React from 'react';
import ActionButton from '../../components/actionButton';
import MainHeader from '../../components/mainHeader';

function LandingPage(props) {
  return (
    <>
      <MainHeader>Your favourite stories</MainHeader>
      <ActionButton isCurrentlyActive={true}>
        Start creating!
      </ActionButton>
    </>
  )
}

export default LandingPage;