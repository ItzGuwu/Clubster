import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import CreateEventForm from "./CreateEventForm";
import EventList from "./EventList";
import { IEventDashboard } from "../../interfaces/IEventDashboard";

export default function EventDashboard(props: IEventDashboard) {
  const [events, setEvents] = React.useState(props.EventData);

  if (props.isCreateEventOpen) {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList EventData={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <CreateEventForm />
        </Grid.Column>
      </Grid>
    );
  }
  return (
    <Grid>
      <Grid.Column>
        <EventList EventData={events} />
      </Grid.Column>
    </Grid>
  );
}
