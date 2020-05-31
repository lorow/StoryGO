import styled from "styled-components";

export const TwoColumnLayout = styled.section`
  display: grid;
  justify-items: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
