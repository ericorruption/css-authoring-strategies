import { useState } from 'react';
import { Bootstrap } from './bootstrap/Bootstrap';
import { CSS } from './css/CSS';
import { StyledComponents } from './styled-components/StyledComponents';
import { Tailwind } from './tailwind/Tailwind';

type strategy = 'css' | 'bootstrap' | 'tailwind' | 'styled-components';

function App() {
  const [strategy, setStrategy] = useState<strategy>('css');

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button type="button" onClick={() => setStrategy('css')}>
          CSS
        </button>
        <button type="button" onClick={() => setStrategy('bootstrap')}>
          Bootstrap
        </button>
        <button type="button" onClick={() => setStrategy('tailwind')}>
          Tailwind
        </button>
        <button type="button" onClick={() => setStrategy('styled-components')}>
          Styled Components
        </button>
      </div>

      {strategy === 'css' && <CSS />}
      {strategy === 'bootstrap' && <Bootstrap />}
      {strategy === 'tailwind' && <Tailwind />}
      {strategy === 'styled-components' && <StyledComponents />}
    </>
  );
}

export default App;

// Caveats
// Bootstrap and tailwind apply global styles.

// TODO
// Magic numbers (something on the bottom right of the page?)
// Widths and heights
// How to theme
