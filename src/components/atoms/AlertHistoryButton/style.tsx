import { CSSProperties } from 'react';

// Define styles with proper CSS properties for TypeScript compatibility
export const classes: Record<string, CSSProperties> = {
  button: {
    backgroundColor: "white",
    height: "32px",
    width: "265px",
    border: "1px solid #E0E0E0",
    color: "#343A40",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Outfit, sans-serif",
    padding: "0",
    cursor: "pointer",
  },
};

// This is just for backward compatibility
const useStyles = () => ({ classes });

export default useStyles; 