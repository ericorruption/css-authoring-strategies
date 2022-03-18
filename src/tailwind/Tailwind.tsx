import type { FunctionComponent, ReactNode } from 'react';

export const Tailwind: FunctionComponent = () => (
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

const LayoutAwareOfIntercom: FunctionComponent<{
  col1: ReactNode;
  col2: ReactNode;
}> = ({ col1, col2 }) => (
  <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-px-4 tw-h-full">
    <div className="tw-col-span-2">{col1}</div>
    <div style={{ marginBottom: 'var(--hack-intercom-height)' }}>{col2}</div>
  </div>
);

const Button: FunctionComponent<{ className?: string }> = ({
  className = ''
}) => (
  <button
    className={`tw-bg-lime-600 tw-text-white tw-px-3 tw-py-1.5 tw-rounded ${className}`}
  >
    Tailwind button
  </button>
);

// Tried to follow the example using tw-before:content-['*'] but didnt work
// https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements
const Notes: FunctionComponent = () => (
  <div className="tw-bg-white tw-drop-shadow tw-p-4 tw-rounded tw-h-full">
    Content
  </div>
);
