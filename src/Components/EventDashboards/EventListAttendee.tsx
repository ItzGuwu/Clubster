import React from "react";
import { Image, List } from "semantic-ui-react";
import { user } from "../../interfaces/IEventListItem";

export default function EventListAttendee(props: user) {
  return (
    <List.Item>
      <Image size="mini" circular src={props.photoURL} />
    </List.Item>
  );
}
