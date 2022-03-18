import type { FunctionComponent, ReactNode } from 'react';

import './style.css';

export const CSS: FunctionComponent = () => (
  <Layout
    col1={
      <>
        <p>Spacing buttons, approach 1</p>

        <div className="actions">
          <button className="button">CSS Button</button>
          <button className="button">CSS Button</button>
        </div>

        <br />

        <p>Spacing buttons, approach 2</p>

        <button className="button">CSS Button</button>
        <span className="spacer" />
        <button className="button">CSS Button</button>
      </>
    }
    col2={<Notes />}
  />
);

// Approach no. 3 could be a utility class on button (e.g.: u-mr-2)

const Layout: FunctionComponent<{ col1: ReactNode; col2: ReactNode }> = ({
  col1,
  col2
}) => (
  <div className="layout">
    <div>{col1}</div>

    {/* Explicitly let notes and col styles mix together */}
    {col2}
  </div>
);

const Notes: FunctionComponent = () => <div className="notes">Content</div>;
