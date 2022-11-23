import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { SiClubhouse } from "react-icons/si";
export default function Navbar() {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <h1>
            Clubster
          </h1>
        </Menu.Item>
        <Menu.Item name="Events" />

        <Menu.Item>
          <Button positive inverted content="Create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button basic inverted content="Register" style={{ marginLeft: '15px' }} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
