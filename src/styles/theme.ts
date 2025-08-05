export const theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#212529',
    error: '#DC3545',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: '8px',
  fonts: {
    body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

export type ThemeType = typeof theme;
