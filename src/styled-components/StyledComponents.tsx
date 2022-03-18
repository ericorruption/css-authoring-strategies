import { FunctionComponent, ReactNode, useContext } from 'react';

import styled, { ThemeProvider as StyledTheme } from 'styled-components';
import { ThemeContext, Theme } from '../Theme';

export const StyledComponents: FunctionComponent = () => {
  const globalTheme = useContext(ThemeContext);

  return (
    <StyledTheme theme={styledThemes[globalTheme]}>
      <Layout
        col1={
          <>
            <SpacedButton>Styled components</SpacedButton>
            <Button>Styled components</Button>
          </>
        }
        col2={<Notes>Content</Notes>}
      />
    </StyledTheme>
  );
};

const styledThemes: Record<Theme, unknown> = {
  claimsforce: {
    primary: 'rebeccapurple'
  },
  hansemerkur: {
    primary: 'green'
  }
};

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  padding: 0.45rem 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: purple;
  }
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

  @media (max-width: 47.99rem) {
    margin-top: 2rem;
  }
`;

const StyledLayout = styled.div`
  @media (max-width: 47.99rem) {
    padding: 0 1rem;
  }
  @media (min-width: 48rem) {
    height: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;

    margin: 0 1rem;
  }
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
