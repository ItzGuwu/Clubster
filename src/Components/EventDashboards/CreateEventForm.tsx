import React from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  List,
  Segment,
} from "semantic-ui-react";

export default function CreateEventForm() {
  return (
    <Segment.Group>
      <Segment clearing>
        <Header floated="left">
          <Icon name="add circle" />
          Create new Club Hosting
        </Header>
      </Segment>
      <Segment clearing>
        <Form>
          <Form.Field>
            <input placeholder="Name of Hosting" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Name of Club" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Date" type="date" />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="AOP(Amount of People) You Want to gather"
              type="number"
            />
          </Form.Field>
          <Button
            type="submit"
            color="green"
            floated="right"
            content={"Create"}
          />
          <Button
            type="submit"
            color="red"
            floated="right"
            content={"Cancel"}
          />
        </Form>
      </Segment>
    </Segment.Group>
  );
}
