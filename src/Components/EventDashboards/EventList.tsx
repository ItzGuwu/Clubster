import React from "react";
import { IEventList } from "../../interfaces/IEventList";
import EventListItem from "./EventListItem";

export default function EventList(props: IEventList) {
  const MappedData = props.EventData.map((e) => {
    return <EventListItem key={e.id} EventDetails={e} />;
  });
  return <>{MappedData}</>;
}
