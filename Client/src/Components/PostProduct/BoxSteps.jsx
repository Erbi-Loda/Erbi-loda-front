import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";


export default function ({ steps }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box className="contenedor-argegar-postproduct" >
      <Paper
        className='contenedor-argegar-postproduct-sub1'
        square
        elevation={0}
        style={{ textAlign: "center" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "max-content",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box
        className='contenedor-argegar-postproduct-sub2'
        sx={{
          height: "max-content",
          maxWidth: "100vw",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1vh 0",
          bgcolor:'white'
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        className='contenedor-argegar-postproduct-sub3'
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Volver
          </Button>
        }
      />
    </Box>
  );
}
