import { css, DefaultTheme, Interpolation } from 'styled-components';
import { theme } from './theme';

type BreakpointKeys = keyof typeof theme.breakpoints;

type Media = {
  [K in BreakpointKeys]: (
    first: TemplateStringsArray,
    ...interpolations: Interpolation<DefaultTheme>[]
  ) => ReturnType<typeof css<DefaultTheme>>;
};

export const media = (
  Object.keys(theme.breakpoints) as BreakpointKeys[]
).reduce((acc, key) => {
  acc[key] = (first, ...interpolations) => css<DefaultTheme>`
    @media (min-width: ${theme.breakpoints[key]}) {
      ${css<DefaultTheme>(first, ...interpolations)}
    }
  `;
  return acc;
}, {} as Media);
