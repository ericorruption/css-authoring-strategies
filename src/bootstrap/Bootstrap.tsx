import { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { ClassicGridLayout } from './ClassicGridLayout';
import { CssGridLayout } from './CssGridLayout';
import { StackLayout } from './StackLayout';

import './bootstrap.scss';

type Layout = 'stack' | 'grid' | 'css-grid';

export const Bootstrap: FunctionComponent = () => {
  const [layout, setLayout] = useState<Layout>('stack');

  return (
    <>
      {layout === 'stack' && (
        <StackLayout
          col1={
            <>
              <Nav onChange={setLayout} />
              <hr />
              <ButtonLayout />
            </>
          }
          col2={<Notes />}
        />
      )}
      {layout === 'grid' && (
        <ClassicGridLayout
          col1={
            <>
              <Nav onChange={setLayout} />
              <hr />
              <ButtonLayout />
            </>
          }
          col2={<Notes />}
        />
      )}
      {layout === 'css-grid' && (
        <CssGridLayout
          col1={
            <>
              <Nav onChange={setLayout} />
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

const Notes: FunctionComponent = () => (
  <div className="shadow rounded p-2 h-100 bs-notes">Content</div>
);

// How to space two buttons
const ButtonLayout: FunctionComponent = () => (
  <Stack direction="horizontal" gap={2}>
    <Button>Bootstrap button</Button>
    <Button>Bootstrap button</Button>
  </Stack>
);

const Nav: FunctionComponent<{
  onChange: (layout: Layout) => void;
}> = ({ onChange }) => (
  <Stack direction="horizontal" as="nav" gap={2} className="mb-2">
    <Button onClick={() => onChange('stack')}>Stack</Button>
    <Button onClick={() => onChange('grid')}>Classic grid</Button>
    <Button onClick={() => onChange('css-grid')}>CSS Grid</Button>
  </Stack>
);
