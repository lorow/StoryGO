import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { OneColumnLayout } from '../../layouts';
import { StyledLink } from '../../components/styledLink';
import ActionButton from '../../components/actionButton';
import subRoutes from './subRoutes';
import styled from 'styled-components';

const EditorGreeter = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 10vh;
  margin-bottom: 60px;
`;

const EditorGreeterTitle = styled.h2`
  color: white;
  font-size: calc(1rem + 2vw);
`;

const EditorGreeterSubTitle = styled.p`
  color: white;
`;

const NextStepButton = styled(StyledLink)`
  margin: 0; 
  width:100%;
  height: 100%;
  line-height: 55px;
  display: block;
`;

function GeneratePage(props) {
  const [step, setStep] = useState(1);
  const [canProoceed, setCanProceed] = useState(false);
  const history = useHistory();
  useEffect(() => {
    history.push('edit')
  }, [history])

  return (
    <OneColumnLayout>
      <EditorGreeter>
        <EditorGreeterTitle>Create your book</EditorGreeterTitle>
        <EditorGreeterSubTitle>Step {step}/2 - add links</EditorGreeterSubTitle>
      </EditorGreeter>

      <Switch>
        {
          subRoutes.map(
            ({ path, Component }) => (
              <Route
                key={path}
                path={path}
                render={routeProps => <Component {...routeProps} onEnter={setStep} validateProceed={setCanProceed} />}
              />)
          )
        }
      </Switch>

      <ActionButton disabled={!canProoceed}>
        <NextStepButton
          isLinkActive={true}
          to="/generate/finish"
        >
          Next step ->
        </NextStepButton>
      </ActionButton>
    </OneColumnLayout>
  )
}

export default GeneratePage;