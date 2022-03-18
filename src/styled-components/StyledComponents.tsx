import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

export const StyledComponents: FunctionComponent = () => (
  <Layout
    col1={
      <>
        <SpacedButton>Styled components</SpacedButton>
        <Button>Styled components</Button>
      </>
    }
    col2={<Notes>Content</Notes>}
  />
);

const Button = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  padding: 0.45rem 0.75rem;
  border-radius: 4px;
`;

const SpacedButton = styled(Button)`
  margin-right: 0.5rem;
`;

const Notes = styled.div`
  padding: 1.5rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  margin-bottom: var(--hack-intercom-height);

  &:before {
    content: '🦄 ';
  }
`;

const StyledLayout = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;

  margin: 0 1rem;
`;

const Layout: FunctionComponent<{ col1: ReactNode; col2: ReactNode }> = ({
  col1,
  col2
}) => (
  <StyledLayout>
    <div>{col1}</div>
    {col2}
  </StyledLayout>
);
