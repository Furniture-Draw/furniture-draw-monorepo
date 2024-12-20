import { Theme, Breakpoint } from '@mui/material/styles';

type ResponsiveValues = {
  [key in Breakpoint]?: unknown;
};

type StyleRecord = Record<string, unknown>;

export const heroStyles = (theme: Theme) => ({
  section: {
    light: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    dark: {
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.common.white,
    },
  },
  
  spacing: {
    container: {
      py: {
        xs: 6,
        md: 12,
      },
    },
    content: {
      mb: {
        xs: 6,
        md: 8,
      },
    },
    features: {
      mt: {
        xs: 4,
        md: 6,
      },
    },
  },
  
  typography: {
    title: {
      fontSize: {
        xs: '2.5rem',
        md: '3.75rem',
      },
      fontWeight: 700,
      lineHeight: 1.2,
      mb: 3,
    },
    description: {
      fontSize: {
        xs: '1.125rem',
        md: '1.25rem',
      },
      lineHeight: 1.6,
      mb: 4,
      maxWidth: '800px',
    },
  },
  
  animation: {
    transition: 'all 0.3s ease-in-out',
    hover: {
      transform: 'translateY(-8px)',
    },
  },
});

export const getResponsiveValue = (
  theme: Theme,
  values: ResponsiveValues
): StyleRecord => {
  const breakpoints = Object.keys(values) as Breakpoint[];
  const mediaQueries: StyleRecord = {};

  breakpoints.forEach((breakpoint) => {
    const mediaQuery = theme.breakpoints.up(breakpoint);
    if (values[breakpoint] !== undefined) {
      mediaQueries[mediaQuery] = values[breakpoint];
    }
  });

  return mediaQueries;
};

// Utility function to apply responsive styles
export const createResponsiveStyles = (
  theme: Theme,
  baseStyles: StyleRecord,
  responsiveStyles: ResponsiveValues
): StyleRecord => {
  return {
    ...baseStyles,
    ...getResponsiveValue(theme, responsiveStyles),
  };
};