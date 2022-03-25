import { lazy, Suspense, useState } from 'react';
import { ThemeContext, Theme } from './Theme';

const Bootstrap = lazy(() => import('./bootstrap/Bootstrap'));
const CSS = lazy(() => import('./css/CSS'));
const StyledComponents = lazy(
  () => import('./styled-components/StyledComponents')
);
const Tailwind = lazy(() => import('./tailwind/Tailwind'));

function App() {
  const strategy = window.location.pathname.split('/')[1];

  if (strategy === '') {
    window.location.href = '/css';
  }

  const [theme, setTheme] = useState<Theme>('claimsforce');

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
          <a href="/css">CSS</a>
          <a href="/bootstrap">Bootstrap</a>
          <a href="/tailwind">Tailwind</a>
          <a href="/styled-components">Styled Components</a>
          <div style={{ marginLeft: 'auto' }} />

          <p style={{ margin: 0 }}>Current theme: {theme}</p>
          <button
            onClick={toggleTheme}
            style={{ border: '1px solid', padding: '0.25em' }}
          >
            <strong>Toggle theme</strong>
          </button>
        </div>

        <ThemeContext.Provider value={theme}>
          <div style={{ flexGrow: 1 }} className={`theme--${theme}`}>
            <Suspense fallback={<>Loading...</>}>
            {strategy === 'css' && <CSS />}
            {strategy === 'bootstrap' && <Bootstrap />}
            {strategy === 'tailwind' && <Tailwind />}
            {strategy === 'styled-components' && <StyledComponents />}
            </Suspense>
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
