import { FunctionComponent, ReactNode } from 'react';

export const CssGridLayout: FunctionComponent<LayoutProps> = ({
  col1,
  col2
}) => (
  <div className="grid h-100 px-3">
    <div className="g-col-12 g-col-md-8">
      <h1>CSS Grid</h1>
      {col1}
    </div>
    <div
      className="g-col-12 g-col-md-4 mt-3 mt-md-0"
      style={{ marginBottom: intercomHeight }}
    >
      {col2}
    </div>
  </div>
);

interface LayoutProps {
  col1: ReactNode;
  col2: ReactNode;
}

const intercomHeight = 'var(--hack-intercom-height)';
