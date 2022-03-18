import type { FunctionComponent, ReactNode } from 'react';

import Stack from 'react-bootstrap/Stack';

export const StackLayout: FunctionComponent<LayoutProps> = ({ col1, col2 }) => (
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

interface LayoutProps {
  col1: ReactNode;
  col2: ReactNode;
}

const intercomHeight = 'var(--hack-intercom-height)';
