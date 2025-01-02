// libs/hero/src/ui/videohero/styles.ts
import { Theme } from '@mui/material/styles';

export const styles = (theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    py: { xs: 8, md: 12 },
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: 4, md: 8 },
  },
  textContent: {
    flex: '1',
    maxWidth: { xs: '100%', md: '50%' },
    zIndex: 1,
  },
  title: {
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    fontWeight: 800,
    lineHeight: 1.2,
    mb: 3,
    color: theme.palette.text.primary,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    color: theme.palette.text.secondary,
    mb: 4,
    lineHeight: 1.6,
  },
  ctaButton: {
    padding: '12px 32px',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows[4],
    },
  },
  videoContainer: {
    flex: '1',
    width: '100%',
    maxWidth: { xs: '100%', md: '50%' },
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: theme.shadows[8],
  },
  video: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
});