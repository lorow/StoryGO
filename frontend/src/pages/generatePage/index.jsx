import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { OneColumnLayout } from "../../layouts";
import ActionButton from "../../components/actionButton";
import subRoutes from "./subRoutes";
import styled from "styled-components";

const EditorGreeter = styled.article`
  display: grid;
  width: 50vw;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "arrow headerT empty" "arrow textT empty";
  height: 10vh;
  margin-bottom: 60px;
`;

const EditorGreeterTitle = styled.h2`
  color: white;
  font-size: calc(1rem + 2vw);
  grid-area: headerT;
`;

const EditorGreeterSubTitle = styled.p`
  color: white;
  grid-area: textT;
`;

const NextStepButton = styled(ActionButton)`
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const BackArrow = styled.button`
  background: url("/arrow.svg");
  background-color: transparent;
  border: none;
  grid-area: arrow;
  width: 40px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-top: auto;
  margin-bottom: auto;
`;

function GeneratePage(props) {
  const [step, setStep] = useState(1);
  const [canProoceed, setCanProceed] = useState(false);
  const history = useHistory();
  const lastStep = 2;

  useEffect(() => {
    // make it 'edit' after you finish desiging the finish page
    history.push("edit");
  }, [history]);

  const handleButtonClick = () => {
    if (step === lastStep) {
      // we're at the very end, call the saga now.
    } else {
      // this will have to be refactored if there will be more steps, but for now
      // simply push the cover path
      history.push("cover");
    }
  };

  return (
    <OneColumnLayout>
      <EditorGreeter>
        {step > 1 && <BackArrow onClick={() => history.goBack()} />}
        <EditorGreeterTitle>Create your book</EditorGreeterTitle>
        <EditorGreeterSubTitle>Step {step}/2 - add links</EditorGreeterSubTitle>
      </EditorGreeter>

      <Switch>
        {subRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            render={(routeProps) => (
              <Component
                {...routeProps}
                onEnter={setStep}
                validateProceed={setCanProceed}
              />
            )}
          />
        ))}
      </Switch>

      <NextStepButton onClick={handleButtonClick} disabled={!canProoceed}>
        {step !== lastStep && "Next step ->"}
        {step === lastStep && "Get me that book!"}
      </NextStepButton>
    </OneColumnLayout>
  );
}

export default GeneratePage;
