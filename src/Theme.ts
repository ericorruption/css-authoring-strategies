import { createContext } from 'react';

export type Theme = 'claimsforce' | 'hansemerkur';

export const ThemeContext = createContext<Theme>('claimsforce');
