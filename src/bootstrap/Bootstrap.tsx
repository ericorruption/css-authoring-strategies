import { FunctionComponent, ReactNode, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './bootstrap.scss';

type LayoutStrategy = 'stack' | 'grid' | 'css-grid';

export const Bootstrap: FunctionComponent = () => {
  const [layoutStrategy, setLayoutStrategy] = useState<LayoutStrategy>('stack');

  return (
    <>
      {layoutStrategy === 'stack' && (
        <StackStrategy
          col1={
            <>
              <Nav onChange={setLayoutStrategy} />
              <hr />
              <ButtonLayout />
            </>
          }
          col2={<Notes />}
        />
      )}
      {layoutStrategy === 'grid' && (
        <ClassicGridStrategy
          col1={
            <>
              <Nav onChange={setLayoutStrategy} />
              <hr />
              <ButtonLayout />
            </>
          }
          col2={<Notes />}
        />
      )}
      {layoutStrategy === 'css-grid' && (
        <CssGridStrategy
          col1={
            <>
              <Nav onChange={setLayoutStrategy} />
              <hr />
              <ButtonLayout />
            </>
          }
          col2={<Notes />}
        />
      )}
    </>
  );
};

interface LayoutProps {
  col1: ReactNode;
  col2: ReactNode;
}

const StackStrategy: FunctionComponent<LayoutProps> = ({ col1, col2 }) => (
  <Stack
    direction="horizontal"
    gap={3}
    className="h-100 align-items-stretch mx-3"
  >
    <div
      style={{
        flexGrow: 2
      }}
    >
      <h1>Stack</h1>
      {col1}
    </div>
    <div
      style={{
        flexGrow: 1,
        marginBottom: intercomHeight
      }}
    >
      {col2}
    </div>
  </Stack>
);

const ClassicGridStrategy: FunctionComponent<LayoutProps> = ({
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

const CssGridStrategy: FunctionComponent<LayoutProps> = ({ col1, col2 }) => (
  <div className="grid h-100 px-3">
    <div className="g-col-8">
      <h1>CSS Grid</h1>
      {col1}
    </div>
    <div className="g-col-4" style={{ marginBottom: intercomHeight }}>
      {col2}
    </div>
  </div>
);

const intercomHeight = 'var(--hack-intercom-height)';

const Notes: FunctionComponent = () => (
  <div className="shadow rounded p-2 h-100 bs-notes">Content</div>
);

// How to space two buttons
const ButtonLayout: FunctionComponent = () => (
  <>
    <Button className="me-2">Bootstrap button</Button>
    <Button>Bootstrap button</Button>
  </>
);

const Nav: FunctionComponent<{
  onChange: (strategy: LayoutStrategy) => void;
}> = ({ onChange }) => (
  <Stack direction="horizontal" as="nav" gap={2} className="mb-2">
    <Button onClick={() => onChange('stack')}>Stack</Button>
    <Button onClick={() => onChange('grid')}>Classic grid</Button>
    <Button onClick={() => onChange('css-grid')}>CSS Grid</Button>
  </Stack>
);
