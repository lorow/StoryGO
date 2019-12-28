import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../components/styledLink';
import ActionButton from '../../components/actionButton';
import MainHeader from '../../components/mainHeader';


const TwoColumnLayout = styled.section`
  display: grid;
  justify-items: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 35px
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
        <ActionButton isCurrentlyActive={true}>
          <StyledLink
            style={{ margin: 0 }}
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