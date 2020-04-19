import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 20px;
  line-height: 60px;

  color: #FFFFFF;
  text-decoration: none;
  
  opacity: ${props => props.isLinkActive ? 1 : .5};

  margin-left: auto;
  margin-right: 40px;
`;

export const StyledRegularLink = styled.a`
  font-size: 20px;
  line-height: ${props => props.isBigger ? '77px' : '60px'};

  color: #FFFFFF;
  text-decoration: none;
  margin: 0;
  width: 100%;
  height: 100%;
  display: block; 
`;