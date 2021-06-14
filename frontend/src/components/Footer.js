import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
  return (
      <footer bg="primary" variant="dark" text-center expand="lg"> 
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; SundayShop</Col>
            </Row>
        </Container>
      </footer>
  );
}

export default Footer;
