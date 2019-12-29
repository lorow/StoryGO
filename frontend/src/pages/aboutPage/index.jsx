import React from 'react';
import styled from 'styled-components';

import ActionButton from '../../components/actionButton';
import { StyledRegularLink } from '../../components/styledLink';
import { OneColumnLayout } from '../../components/layouts';
import MainHeader from '../../components/mainHeader';

const DecorativeHR = styled.hr`
  width: 130px;
  height: 7px;
  border: none;
  background-color: #0085FF;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const Description = styled.p`
  width: 40%;
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  margin-top: 10px;

  &:last-of-type{
    margin-bottom: 50px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
  color: #6C6C6C;
`;

function AboutPage(props) {
  return (
    <OneColumnLayout>
      <MainHeader biggerTitle={true}>
        About this project
      </MainHeader>
      <DecorativeHR />

      <Description>
        Soliter is a passion project of mine, developed with python, flask, react and redux to help othes who like me - like to keep a collection of they favourite stories. I designed this web app to be easy to use and even easier to get into it’s code and help develop it further if you so wish.
      </Description>

      <Description>
        It’s all free and open source!
      </Description>

      <ActionButton isBigger={true}>
        <StyledRegularLink href="https://github.com/lorow/Soliter">
          Click here for source
            </StyledRegularLink>
      </ActionButton>

      <Footer>
        <p>developed with &#60;3 and lots of coffee</p>
      </Footer>
    </OneColumnLayout>
  )
}

export default AboutPage;