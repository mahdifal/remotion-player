import { Row, Col } from 'react-bootstrap';

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center bg-info rounded-2" data-testid="header-col">
        <h1 className="text-center text-light">{title}</h1>
      </Col>
    </Row>
  );
}

export default Header;
