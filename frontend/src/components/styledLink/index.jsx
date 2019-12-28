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
