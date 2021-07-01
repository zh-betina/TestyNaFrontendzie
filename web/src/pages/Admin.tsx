import React from "react";
import Container from "../templates/Container";
import { Login } from "../organisms/Login";
import { Logout } from "../organisms/Logout";
import { useUser } from "../userContext/UserContext";

const Admin = () => {
  const {
    state: { user },
  } = useUser();

  if (!user) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  return (
    <Container>
      <Logout />
      ADMIN
    </Container>
  );
};

export default Admin;
