import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center bg-info rounded-2">
        <h1 className="text-center text-light">
          Video Player with Editable Text
        </h1>
      </Col>
    </Row>
  );
}

export default Header;
