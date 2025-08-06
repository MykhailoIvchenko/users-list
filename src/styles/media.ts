import { css, Interpolation } from 'styled-components';
import { theme } from './theme';

type BreakpointKeys = keyof typeof theme.breakpoints;

type Media = {
  [K in BreakpointKeys]: (
    first: TemplateStringsArray,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...interpolations: Interpolation<any>[]
  ) => ReturnType<typeof css>;
};

export const media = (
  Object.keys(theme.breakpoints) as BreakpointKeys[]
).reduce((acc, key) => {
  acc[key] = (first, ...interpolations) => css`
    @media (min-width: ${theme.breakpoints[key]}) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {} as Media);
