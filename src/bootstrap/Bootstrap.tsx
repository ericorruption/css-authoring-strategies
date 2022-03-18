import type { FunctionComponent } from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Bootstrap: FunctionComponent = () => (
  <>
    <Button className="me-2">Bootstrap button</Button>
    <Button>Bootstrap button</Button>
  </>
);
