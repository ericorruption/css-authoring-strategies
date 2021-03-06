import type { FunctionComponent, ReactNode } from 'react';

import './tailwind.css';

const Tailwind: FunctionComponent = () => (
  <LayoutAwareOfIntercom
    col1={
      <>
        <Button className="tw-mr-2" />
        <Button />
      </>
    }
    col2={<Notes />}
  />
);

export default Tailwind;

const LayoutAwareOfIntercom: FunctionComponent<{
  col1: ReactNode;
  col2: ReactNode;
}> = ({ col1, col2 }) => (
  <div className="md:tw-grid tw-grid-cols-3 tw-gap-4 tw-px-4 tw-h-full">
    <div className="tw-col-span-2">{col1}</div>
    <div
      className="tw-mt-3 md:tw-mt-0"
      style={{ marginBottom: 'var(--hack-intercom-height)' }}
    >
      {col2}
    </div>
  </div>
);

const Button: FunctionComponent<{ className?: string }> = ({
  className = ''
}) => (
  <button
    className={`tw-bg-lime-600 tw-text-white tw-px-3 tw-py-1.5 tw-rounded tw-transition hover:tw-bg-lime-700 ${className}`}
  >
    Tailwind button
  </button>
);

// Tried to follow the example using before:content-['🦄 '] but didnt work
// https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements
const Notes: FunctionComponent = () => (
  <div className="tw-bg-white tw-drop-shadow tw-p-4 tw-rounded tw-h-full">
    Content
  </div>
);

// https://tailwindcss.com/docs/theme
// Theming with tailwind happens in the config file, not during runtime.
// This means we would need one tailwind build for each theme
// and figure out how to load the right one during runtime.
