import React, { useEffect } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { SiClubhouse } from "react-icons/si";
import { BsFillCalendar2RangeFill } from "react-icons/bs";
import { INavbar } from "../../interfaces/INavbar";
import { ReverseStateBoolean } from "../../functions/ReverseStateBoolean";
export default function Navbar(props: INavbar) {
  const [CreateEventState, setCreateEventState] =
    React.useState<string>("Create Event");

  useEffect(() => {
    if (props.CurrentEventState) {
      setCreateEventState("Cancel Event");
    } else {
      setCreateEventState("Create Event");
    }
  });
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <h1>
            {" "}
            <BsFillCalendar2RangeFill style={{ marginRight: 10 }} />
            Clubster
          </h1>
        </Menu.Item>
        <Menu.Item name="Events" />

        <Menu.Item>
          <Button
            positive
            inverted
            content={CreateEventState}
            onClick={() =>
              ReverseStateBoolean(
                props.SetIsOpenCurrentEvent,
                props.CurrentEventState
              )
            }
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "15px" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
