import type { FunctionComponent } from 'react';

export const Tailwind: FunctionComponent = () => (
  <>
    <Button className="tw-mr-2" />
    <Button />
  </>
);

const Button: FunctionComponent<{ className?: string }> = ({
  className = '',
}) => (
  <button
    className={`tw-bg-lime-600 tw-text-white tw-px-3 tw-py-1.5 tw-rounded ${className}`}
  >
    Tailwind button
  </button>
);
