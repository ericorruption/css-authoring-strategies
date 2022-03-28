import { Button, Space, Row, Col } from 'antd';
import { FunctionComponent, ReactNode } from 'react';

import './antd.css';

// Requires less to change theming. Use plain CSS instead
const Antd: FunctionComponent = () => (
  <LayoutAwareOfIntercom
    col1={
      <Space>
        <Button>Antd button</Button>
        <Button>Antd button</Button>
      </Space>
    }
    col2={<Notes />}
  />
);

export default Antd;

const LayoutAwareOfIntercom: FunctionComponent<{
  col1: ReactNode;
  col2: ReactNode;
}> = ({ col1, col2 }) => (
  <Row style={{ padding: '0 2rem', height: '100%' }}>
    <Col span="16">{col1}</Col>
    <Col
      span="8"
      style={{
        paddingBottom: 'var(--hack-intercom-height)'
      }}
    >
      {col2}
    </Col>
  </Row>
);

const Notes: FunctionComponent = () => (
  <div
    style={{
      padding: '1.5rem',
      borderRadius: 4,
      height: '100%',
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2)'
    }}
  >
    Content
  </div>
);
