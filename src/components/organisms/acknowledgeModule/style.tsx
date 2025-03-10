import { CSSProperties } from 'react';

// Define styles with proper CSS properties for TypeScript compatibility
export const classes: Record<string, CSSProperties> = {
  container: {
    backgroundColor: "white",
    minHeight: "100vh",
    padding: 0,
  },
  mainContainer: {
    marginTop: 120,
  },
  loaderContainer: {
    marginTop: 40,
  },
  contentContainer: {
    marginTop: 40,
  },
  checkIcon: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#006456',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#006456',
    fontSize: 38,
    fontWeight: 500,
    fontFamily: 'Outfit, sans-serif',
    marginBottom: 20,
    textAlign: 'center' as const,
    lineHeight: 1.2,
  },
  description: {
    color: '#5C5F66',
    textAlign: 'center' as const,
    maxWidth: 400,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '20px',
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 40,
  },
};

// This is just for backward compatibility
const useStyles = () => ({ classes });

export default useStyles;
