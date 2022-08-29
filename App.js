import React from "react";
import { useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Button,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Pressable,
  Image,
  ScrollView,
} from "native-base";

import NativeBaseIcon from "./components/NativeBaseIcon";
import AllContest from "./components/AllContest";
import Profile from "./components/Profile";
import Home from "./components/Home";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// Show notifications when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
})

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(statusObj => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then(statusObj => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted");
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then(response => {
        const deviceToken = response.data;
        console.log({ deviceToken });
      })
      .catch(err => {
        return null;
      });
  }, []);
useEffect(() => {
  const receivedSubscription = Notifications.addNotificationReceivedListener(
    notification => {
      console.log("Notification Received!");
      console.log(notification);
    }
  );

  const responseSubscription =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification Clicked!");
      console.log(response);
    });
  return () => {
    receivedSubscription.remove();
    responseSubscription.remove();
  };
}, []);
  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Local Notification",
        body: "Hello this is a local notification!",
      },
      trigger: { seconds: 1 },
    });
  };
  return (
    <NativeBaseProvider>
      <Center bg={"blueGray.900"} px="2" py="4" flex={1}>
        <AllContest />
        {/* <Home /> */}
        {/* <Button
          title="Trigger Local Notification"
          onPress={triggerLocalNotificationHandler}
        >Push Notification</Button> */}
        {/* <Profile /> */}
      </Center>
    </NativeBaseProvider>
  );
}
