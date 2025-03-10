import { useState, useEffect } from "react";
import { Container, Stack, Title, Text, Loader, Box, Center } from "@mantine/core";
import { AcknowledgePageHeader, AlertHistoryButton } from "../../atoms";
import { IconCheck } from "@tabler/icons-react";
import { classes } from "./style";

type ScreenType = "loading" | "acknowledged" | "alreadyAcknowledged" | "resolved";

interface AlertContent {
  header: string;
  description: string;
}

const AcknowledgeModulePage = () => {
  const [screen, setScreen] = useState<ScreenType>("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("acknowledged");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const alertContent: Record<Exclude<ScreenType, "loading">, AlertContent> = {
    acknowledged: {
      header: "Alerts acknowledged",
      description:
        "You acknowledged the alert. It remains active until resolved and will then be archived in Alert Logs.",
    },
    alreadyAcknowledged: {
      header: "Alert already acknowledged",
      description: "This alert has already been acknowledged in Alerts History.",
    },
    resolved: {
      header: "Alert Resolved",
      description: "This alert has been Resolved in Alerts History.",
    },
  };

  const renderContent = () => {
    if (screen === "loading") {
      return (
        <Center style={classes.loaderContainer}>
          <Loader size="lg" color="#006456" />
        </Center>
      );
    }

    const content = alertContent[screen];
    return (
      <Stack align="center" gap={0} style={classes.contentContainer}>
        <Title
          order={1}
          style={classes.title}
        >
          {content.header}
        </Title>
        <Text 
          style={classes.description}
        >
          {content.description}
        </Text>
      </Stack>
    );
  };

  return (
    <Box style={classes.container}>
      <AcknowledgePageHeader />
      <Container size={480} style={classes.mainContainer}>
        <Stack align="center" gap={0}>
          <Box style={classes.checkIcon}>
            <IconCheck size={32} color="white" stroke={2} />
          </Box>
          {renderContent()}
          <Box style={classes.buttonWrapper}>
            <AlertHistoryButton />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AcknowledgeModulePage;
