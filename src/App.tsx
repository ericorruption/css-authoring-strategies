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
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
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
          <button
            type="button"
            onClick={() => setStrategy('styled-components')}
          >
            Styled Components
          </button>
        </div>

        <div style={{ flexGrow: 1 }}>
          {strategy === 'css' && <CSS />}
          {strategy === 'bootstrap' && <Bootstrap />}
          {strategy === 'tailwind' && <Tailwind />}
          {strategy === 'styled-components' && <StyledComponents />}
        </div>
      </div>
      {/* Fake intercom */}
      <a
        href="https://www.intercom.com"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: 'orange',
          textDecoration: 'none',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '100%'
        }}
      >
        Int.
      </a>
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
