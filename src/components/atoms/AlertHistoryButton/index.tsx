// mantine
import { useLocation } from "wouter";
import { classes } from "./style";

const AlertHistoryButton = () => {
  const [, setLocation] = useLocation();

  const handleViewAlertHistory = () => {
    setLocation("/alert/alerts");
  };

  return (
    <button
      onClick={handleViewAlertHistory}
      style={classes.button}
    >
      Go to Alert History
    </button>
  );
};

export default AlertHistoryButton;
