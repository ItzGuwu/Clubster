import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import EventDashboard from "./Components/EventDashboard";
import Navbar from "./Components/NavBar/Navbar";
import "./Styles/Styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">

        <EventDashboard />
      </Container>

    </>
  );
};

export default App;
