import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LinearStepper from "./LinearStepper";

function EnquiryForm() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={2} style={{ width: "100%", maxWidth: "550px", margin: "auto", marginRight: "20px" }}>
       <Paper component={Box} p={2} style={{ borderRadius: "20px", backgroundColor: "transparent", boxShadow: "none" }}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default EnquiryForm;
