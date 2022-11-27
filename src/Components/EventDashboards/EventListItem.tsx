import React from "react";
import { Icon, Item, Segment, List, Button } from "semantic-ui-react";
import { AttendeeMapper } from "../../functions/DataMapper";
import { IEventListItem } from "../../interfaces/IEventListItem";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem(props: IEventListItem) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={props.EventDetails.hostPhotoURL}
            ></Item.Image>
            <Item.Content>
              <Item.Header content={props.EventDetails.title} />
              <Item.Description>
                Hosted By {props.EventDetails.hostedBy}
              </Item.Description>
              <Item.Description>
                From {props.EventDetails.club}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {props.EventDetails.date}
          <Icon name="add user" /> {props.EventDetails.attendees.length} /{" "}
          {props.EventDetails.AOP}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>{AttendeeMapper(props.EventDetails.attendees)}</List>
      </Segment>
      <Segment clearing>
        <span>Description of Club</span>
        <p>{props.EventDetails.description}</p>
        <Button type="submit" color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
