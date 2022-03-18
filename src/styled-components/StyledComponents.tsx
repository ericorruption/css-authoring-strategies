import type { FunctionComponent } from 'react';

import styled from 'styled-components';

export const StyledComponents: FunctionComponent = () => (
  <>
    <SpacedButton>Styled components</SpacedButton>
    <Button>Styled components</Button>
  </>
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
