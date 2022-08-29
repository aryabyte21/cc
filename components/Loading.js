import React from "react";
import { Text, NativeBaseProvider } from "native-base";
function Loading() {
  return (
    <NativeBaseProvider>
      <Text
        pl="32"
        bg="coolGray.800"
        p="2"
        rounded="md"
        color="white"
        fontSize="lg"
        my="4"
      >
        Loading...
      </Text>
    </NativeBaseProvider>
  );
}

export default Loading;
