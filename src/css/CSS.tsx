import type { FunctionComponent } from 'react';

import './style.css';

export const CSS: FunctionComponent = () => (
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
);

// Approach no. 3 could be a utility class on button (e.g.: u-mr-2)
