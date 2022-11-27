import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { sampleData } from "./Assets/SampleData";
import EventDashboard from "./Components/EventDashboards/EventDashboard";
import Navbar from "./Components/NavBar/Navbar";
import "./Styles/Styles.css";

function App() {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar
        SetIsOpenCurrentEvent={setFormOpen}
        CurrentEventState={formOpen}
      />
      <Container className="main">
        <EventDashboard EventData={sampleData} isCreateEventOpen={formOpen} />
      </Container>
    </>
  );
}

export default App;
