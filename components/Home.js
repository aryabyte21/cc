import React from "react";
import PopupNav from "./PopupNav";
import {
  Box,
  IconButton,
  HStack,
  Icon,
  Center,
  Avatar,
  NativeBaseProvider,
  ChevronDownIcon,
  Heading,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
function Home() {
  return (
    <NativeBaseProvider>
      <Heading mt="24" ml="-5" color="white" size="3xl">
        Hi,Kapare
      </Heading>
      <Heading mt="12" ml="-5" color="white" size="xl">
        Welcome to DSA Daily
      </Heading>
      <Heading mt="6" color="white" size="md">
        Check out for upcoming contests
      </Heading>
      <Heading color="white" size="md">
        and set reminders
      </Heading>
      <Heading mt="8" color="white" size="sm">
        It's our responsibility to remind you..
        <Avatar
          bg="green.500"
          alignSelf="center"
          size="sm"
          source={{
            uri: "http://cdn.shopify.com/s/files/1/1061/1924/products/Wink_Emoji_grande.png?v=1571606035",
          }}
        >
          AJ
        </Avatar>
      </Heading>

      <Center>
        <Heading mt="16" color="white" size="md">
          Let's get started!
        </Heading>
        <ChevronDownIcon size="lg" color="white" mb="0" />
      </Center>
      <PopupNav />
    </NativeBaseProvider>
  );
}

export default Home;
