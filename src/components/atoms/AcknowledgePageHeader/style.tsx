import { CSSProperties } from 'react';

// Define styles with proper CSS properties for TypeScript compatibility
export const classes: Record<string, CSSProperties> = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "white",
    borderBottom: "1px solid #E9ECEF",
  },
  logo: {
    width: 150,
    height: 40,
    objectFit: "contain",
  },
};

// This is just for backward compatibility
const useStyles = () => ({ classes });

export default useStyles;
