import React from 'react'
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Progress,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
   
    VStack,
    Box,
    Avatar,
    Pressable,
    Image,
    Badge,
    ScrollView,
  } from "native-base";
function Profile() {
    
  return (
    <NativeBaseProvider>
        <Center>
        <Box>   <Avatar bg="green.500" size="xl" source={{
            uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
    }}>
        AJ
      </Avatar>
      </Box>
        <Box>
        <Heading my="4" size="lg">Aditya Kapare</Heading>
        </Box>
        <Box>
            <Text fontSize="lg">Platforms</Text>
        </Box>
        <Box my="2">
        <Text fontSize="md">
        <Badge colorScheme="coolGray">CodeChef</Badge>
        <Badge colorScheme="coolGray">CodeChef</Badge>
        <Badge colorScheme="coolGray">LeetCode</Badge>
        <Badge colorScheme="coolGray">AtCoder</Badge>  
        </Text>
      
        </Box>
       
        <Center w="100%" my="4">
      <Box w="90%" maxW="400">
          <Text>Experience Level</Text>
        <Progress colorScheme="emerald" value={20} my="4" />
      </Box>
    </Center>
    <Box>
        <Text fontSize="lg" my="4">Upcoming Contests</Text>
        </Box>
        <Box>
       
        </Box>
        </Center>
       
    </NativeBaseProvider>
  )
}

export default Profile