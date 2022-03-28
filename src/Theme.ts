import { createContext } from 'react';

export type Theme = 'a' | 'b';

export const ThemeContext = createContext<Theme>('a');
