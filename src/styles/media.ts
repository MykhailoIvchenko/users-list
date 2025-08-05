import { css, DefaultTheme, Interpolation } from 'styled-components';

type BreakpointKeys = keyof DefaultTheme['breakpoints'];

type Media = {
  [K in BreakpointKeys]: (
    first: TemplateStringsArray,
    ...interpolations: Interpolation<DefaultTheme>[]
  ) => ReturnType<typeof css<DefaultTheme>>;
};

export const media = (
  Object.keys({} as DefaultTheme['breakpoints']) as BreakpointKeys[]
).reduce((acc, key) => {
  acc[key] = (first, ...interpolations) => css<DefaultTheme>`
    @media (min-width: ${({ theme }) => theme.breakpoints[key]}) {
      ${css<DefaultTheme>(first, ...interpolations)}
    }
  `;
  return acc;
}, {} as Media);
