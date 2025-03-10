import { classes } from "./style";

type AlertStatus = "resolved" | "acknowledge" | "acknowledged";

interface AlertMessage {
  header: string;
  description: string;
}

interface AlertMessages {
  resolved: AlertMessage;
  acknowledge: AlertMessage;
  acknowledged: AlertMessage;
}

const AcknowledgeContents = () => {
  const alertMessages: AlertMessages = {
    resolved: {
      header: "Alert resolved",
      description: "This alert already resolved and archived in Alerts History.",
    },
    acknowledge: {
      header: "Alert acknowledge",
      description:
        "You acknowledged the alert. It remains active until resolved and will then be archived in Alert Logs.",
    },
    acknowledged: {
      header: "Alert already acknowledge",
      description: "This alert has been acknowledged in Alerts History.",
    },
  };

  // This would normally come from an API, but for demo purposes we'll hardcode it
  const alertStatus: AlertStatus = "resolved";

  const { header, description } = alertMessages[alertStatus];

  return (
    <div style={classes.container}>
      <div style={classes.header}>{header}</div>
      <div style={classes.description}>{description}</div>
    </div>
  );
};

export default AcknowledgeContents;
