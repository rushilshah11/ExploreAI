import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../components/login.css";

export default function LoginOrRegister() {
  return (
    <div className="body">
      <Container fluid className="container-wrapper">
        <Row>
          <Col className="login-wrapper">
            <Login />
          </Col>

          <Col className="register-wrapper">
            <Register />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
