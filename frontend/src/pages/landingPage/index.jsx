import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../components/styledLink';
import { TwoColumnLayout } from '../../components/layouts';
import ActionButton from '../../components/actionButton';
import MainHeader from '../../components/mainHeader';


const SubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 35px;
  max-width: 550px;
  color: #8E8E8E;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const FirstColumnContainer = styled.div`
  padding-top:80px;
`;

function LandingPage(props) {
  return (
    <TwoColumnLayout>
      <FirstColumnContainer>
        <MainHeader>Your favourite stories</MainHeader>
        <SubTitle>
          From nosleep, writing prompts and more.
          Always with you, wherever you are
          in a form of an ebook
        </SubTitle>
        <ActionButton>
          <StyledLink
            style={{ margin: 0, width: '100%', height: '100%', display: 'block' }}
            isLinkActive={true}
            to="/generate"
          >
            Start creating!
          </StyledLink>
        </ActionButton>
      </FirstColumnContainer>
      <img src="/Phone.svg" alt="An representation of a finished book" srcset="" />
    </TwoColumnLayout >
  )
}

export default LandingPage;