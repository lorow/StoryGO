import React from 'react';
import styled from 'styled-components';
import routes from '../../routes.js';
import { Link, withRouter } from 'react-router-dom';


function Navbar(props) {
  return (
    <Nav>
      <Title>Soliter</Title>
      {
        routes.map(
          ({ path, name }, index) => (
            <StyledLink
              key={path + index}
              isLinkActive={props.location.pathname === path}
              to={path}
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

const StyledLink = styled(Link)`
  font-size: 20px;
  line-height: 60px;

  color: #FFFFFF;
  text-decoration: none;
  
  opacity: ${props => props.isLinkActive ? 1 : .5};

  margin-left: auto;
  margin-right: 40px;
`;

export default withRouter(Navbar);