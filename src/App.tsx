import { useState } from 'react';
import { ThemeContext, Theme } from './Theme';
import { Bootstrap } from './bootstrap/Bootstrap';
import { CSS } from './css/CSS';
import { StyledComponents } from './styled-components/StyledComponents';
import { Tailwind } from './tailwind/Tailwind';

type strategy = 'css' | 'bootstrap' | 'tailwind' | 'styled-components';

function App() {
  const [theme, setTheme] = useState<Theme>('claimsforce');
  const [strategy, setStrategy] = useState<strategy>('css');

  const toggleTheme = () =>
    setTheme(theme === 'claimsforce' ? 'hansemerkur' : 'claimsforce');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: '1rem'
          }}
        >
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
          <div style={{ marginLeft: 'auto' }} />
          <button onClick={toggleTheme}>
            <strong>Toggle theme</strong>
          </button>{' '}
          <p style={{ margin: 0 }}>Current theme: {theme}</p>
        </div>

        <ThemeContext.Provider value={theme}>
          <div style={{ flexGrow: 1 }} className={`theme--${theme}`}>
            {strategy === 'css' && <CSS />}
            {strategy === 'bootstrap' && <Bootstrap />}
            {strategy === 'tailwind' && <Tailwind />}
            {strategy === 'styled-components' && <StyledComponents />}
          </div>
        </ThemeContext.Provider>
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
// Widths and heights
// Responsiveness
