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
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
function Contests(props) {
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
  });

  // extend the theme
  const time = (time) => {
    const date = time.split("T");
    return date;
  };
  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted");
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const deviceToken = response.data;
        console.log({ deviceToken });
      })
      .catch((err) => {
        return null;
      });
  }, []);
  useEffect(() => {
    const receivedSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
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

  const str = "19:26:00";

  const [hours, minutes, seconds] = str.split(":");

  function convertToSeconds(hours, minutes, seconds) {
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  }
function utctoist(str){
  var dateUTC = new Date();
  var dateUTC = dateUTC.getTime(str);
  var dateIST = new Date(dateUTC);
  //date shifting for IST timezone (+5 hours and 30 minutes)
  dateIST.setHours(dateIST.getHours() + 5);
  dateIST.setMinutes(dateIST.getMinutes() + 30);
  return dateIST
}
  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "codeclock",
        body: "Hey! " + props.name + " has started.",
      },
      trigger: {
        // seconds:
        //   new Date(time("2022-08-28")).getTime() / 1000 -
        //   new Date().getTime() / 1000 +
        //   19800 +
        //   convertToSeconds(hours, minutes, seconds) -
        //   convertToSeconds(
        //     new Date().getUTCHours(),
        //     new Date().getUTCMinutes(),
        //     new Date().getUTCSeconds()
        //   ), //contest time - current time //UTC
        day: (time(props.start)[0].slice(8, 10)),
        hour: ((time(props.start)[0].slice(10, 13)+5)%24),
      },
    });
  };

  return (
    <NativeBaseProvider>
      <Box
        _dark={{ bg: "coolGray.800" }}
        _light={{ bg: "primary.600" }}
        py="4"
        px="8"
        mb="8"
        borderRadius="5"
        rounded="md"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Heading color="white">{props.site}</Heading>
              <Text color="white" fontSize="xl">
                {props.name}
                {/* {new Date(time(props.start)[0].slice(0, 10)).getTime()/1000 -
                  new Date().getTime()/1000 +
                  19800 +
                  convertToSeconds(hours, minutes, seconds) - convertToSeconds(new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds())} */}
                {/* {new Date().getUTCHours()} */}
                {/* {new Date(time(props.start)[0]).toString()} */}
                {/* {(new Date(props.start[0]) - new Date())/(1000 * 60)} */}
                {/* {props.start} */}
                {/* {(new Date().toUTCString())} */}
                {/* {new Date().UTC()} */}
                {/* {new Date(time(props.start)[0].slice(0, 10)).getTime()} */}
              </Text>
              <Text fontSize="sm" color="white">
                <Text>Starts: </Text>
                {time(props.start)[0]}
                {"\n"}
                {time(props.start)[1].slice(0, 5)}
              </Text>
              <Text fontSize="sm" color="white">
                <Text>Ends: </Text>
                {time(props.end)[0]}
                {"\n"}
                {time(props.end)[1].slice(0, 5)}
              </Text>
            </VStack>
            <Text>
              Status:{props.status == "CODING" ? "Started" : "Upcoming"}
            </Text>
            {/* <Button title="Trigger Local Notification"> */}
            <Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3"
              my="2"
              onPress={triggerLocalNotificationHandler}
            >
              <Text
                textTransform="uppercase"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                Remind me
              </Text>
            </Pressable>
            {/* </Button> */}
          </Box>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Contests;
