import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import ButtonStep from "../ButtonStep/ButtonStep";
import "./Stepper.scss"

// import step form
import WebsiteProfile from './WebsiteProfile';
import NavbarSelect from './NavbarSelect';
import BannerSelect from './BannerSelect';
import FooterSelect from './FooterSelect';
import CheckPage from './CheckPage';

import { StepperProvider } from "./StepperContext";


const steps = [
  "Website Profile",
  "Select Navbar",
  "Select Banner",
  "Select Footer",
  "Confirmation",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StepperProvider>
      <Box sx={{ width: "100%" }}>
        {activeStep === 0 && (
          <h1 className="text-3xl font-bold mb-8">Website Profile</h1>
        )}
        {activeStep === 1 && (
          <h1 className="text-3xl font-bold mb-8">Select Navbar Style</h1>
        )}
        {activeStep === 2 && (
          <h1 className="text-3xl font-bold mb-8">Select Banner Style</h1>
        )}
        {activeStep === 3 && (
          <h1 className="text-3xl font-bold mb-8">Select Footer Style</h1>
        )}
        {activeStep === 4 && (
          <h1 className="text-3xl font-bold mb-8">Confirmation</h1>
        )}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel className="text-3xl">{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <ButtonStep onClick={handleReset}>Reset</ButtonStep>
            </Box>
          </React.Fragment>
        ) : (
          <div className="mt-12">
            {activeStep === 0 && <WebsiteProfile />}
            {activeStep === 1 && <NavbarSelect />}
            {activeStep === 2 && <BannerSelect />}
            {activeStep === 3 && <FooterSelect />}
            {activeStep === 4 && <CheckPage />}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <ButtonStep
                outline
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Previous
              </ButtonStep>
              <Box sx={{ flex: "1 1 auto" }} />
              <ButtonStep onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </ButtonStep>
            </Box>
          </div>
        )}
      </Box>
    </StepperProvider>
  );
}
