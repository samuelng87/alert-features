import { CSSProperties } from 'react';

// Define styles with proper CSS properties for TypeScript compatibility
export const classes: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  header: {
    color: "#006456",
    fontSize: 38,
    fontWeight: 500,
    marginBottom: 20,
    textAlign: "center" as const,
  },
  description: {
    fontSize: 12,
    fontWeight: 400,
    color: "#5C5F66",
    lineHeight: "20px",
    textAlign: "center" as const,
    maxWidth: 400,
  },
};

// This is just for backward compatibility
const useStyles = () => ({ classes });

export default useStyles;
