import React from 'react';
import styled from 'styled-components';
import routes from '../../routes.js';
import { StyledLink } from '../styledLink';
import { withRouter } from 'react-router-dom';


function Navbar(props) {
  return (
    <Nav>
      <Title>Soliter</Title>
      {
        routes.map(
          ({ path, name }, index) => path !== "/generate/:stageName" ? (
            <StyledLink
              key={path + index}
              isLinkActive={props.location.pathname === path}
              to={path}
            >
              {name}
            </StyledLink>
          ) : (
              <StyledLink
                key={path + index}
                isLinkActive={props.location.pathname === path}
                to={"/generate/edit"}
              >
                {name}
              </StyledLink>
            )
        )
      }
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding-top: 30px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 5fr repeat(3, .1fr);
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 60px;
  margin-left: 40px;
  color: #FFFFFF;
`;


export default withRouter(Navbar);