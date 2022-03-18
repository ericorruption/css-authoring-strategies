import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FunctionComponent, ReactNode } from 'react';

export const ClassicGridLayout: FunctionComponent<LayoutProps> = ({
  col1,
  col2
}) => (
  <Container fluid className="h-100">
    <Row className="h-100">
      <Col>
        <h1>Classic grid</h1>
        {col1}
      </Col>
      <Col md="4" className="h-100" style={{ paddingBottom: intercomHeight }}>
        {col2}
      </Col>
    </Row>
  </Container>
);

interface LayoutProps {
  col1: ReactNode;
  col2: ReactNode;
}

const intercomHeight = 'var(--hack-intercom-height)';
