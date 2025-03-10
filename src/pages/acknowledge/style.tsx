import { CSSProperties } from 'react';

// Define styles with proper CSS properties for TypeScript compatibility
export const classes: Record<string, CSSProperties> = {
  AcknowledgeBackground: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#F1F3F5",
  },
  AcknowledgeContentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
  },
  AcknowledgeContentsModal: {
    border: "1px solid #e0e0e0",
    width: "100%",
    height: "100%",
    maxWidth: "1500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    backgroundColor: "white",
    margin: "40px 20px 32px 20px",
  },
  AcknowledgeContentsLogo: {
    marginBottom: "10px",
  },
  AcknowledgeContentsDetails: {
    padding: "0 20px",
    textAlign: "center" as const,
  },
  AcknowledgeDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  },
  Header: {
    color: "#006456",
    fontSize: "38px",
    fontWeight: 500,
    marginBottom: "20px",
  },
  Description: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#5C5F66",
    lineHeight: "20px",
  },
  ContentCard: {
    width: "100%",
    padding: "0 15px",
    textAlign: "center" as const,
  },
};

// This is just for backward compatibility
const useStyles = () => ({ classes });

export default useStyles;
