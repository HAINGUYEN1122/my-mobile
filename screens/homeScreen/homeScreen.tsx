import React, { Component } from "react";
import {
  Center,
  VStack,
  Heading,
  HStack,
  Box,
  Text,
  Badge,
  Flex,
  Pressable,
  Spacer,
  Container,
} from "native-base";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import { ToggleDarkMode } from "../../components/toggleDarkMode";
import { StatusBar } from "native-base";

function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      height="100%"
    >
      <VStack space={4} alignItems="center">
        <Heading size="md">
          <ToggleDarkMode />
        </Heading>
        <HStack space={3} justifyContent="center">
          <Center>
            <Box>
              <Pressable maxW="96" alignItems="center" >
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                    _light={isPressed?{ bg: "coolGray.200" } : { bg: "coolGray.100" }} 
                    _dark={isPressed?{ bg: "blueGray.200" } : { bg: "blueGray.100" }}
                    //   bg={
                    //     isPressed
                    //       ? "coolGray.200"
                    //       : isHovered
                    //       ? "coolGray.200"
                    //       : "coolGray.100"
                    //   }
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                    >
                      <HStack alignItems="center">
                        <Badge
                          colorScheme="darkBlue"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Business
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                          1 month ago
                        </Text>
                      </HStack>
                      <Flex>
                        {isFocused ? (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            textDecorationLine="underline"
                            color="darkBlue.600"
                            alignSelf="flex-start"
                          >
                            Read More
                          </Text>
                        ) : (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            color="darkBlue.600"
                          >
                            Read More
                          </Text>
                        )}
                      </Flex>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
          <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
            <Box alignItems="center">
              <Pressable maxW="96">
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                    >
                      <HStack alignItems="center">
                        <Badge
                          colorScheme="darkBlue"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Business
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                          1 month ago
                        </Text>
                      </HStack>
                      <Flex>
                        {isFocused ? (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            textDecorationLine="underline"
                            color="darkBlue.600"
                            alignSelf="flex-start"
                          >
                            Read More
                          </Text>
                        ) : (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            color="darkBlue.600"
                          >
                            Read More
                          </Text>
                        )}
                      </Flex>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
        </HStack>
        <HStack space={3} justifyContent="center">
          <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
            <Box alignItems="center">
              <Pressable maxW="96">
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                    >
                      <HStack alignItems="center">
                        <Badge
                          colorScheme="darkBlue"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Business
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                          1 month ago
                        </Text>
                      </HStack>
                      <Flex>
                        {isFocused ? (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            textDecorationLine="underline"
                            color="darkBlue.600"
                            alignSelf="flex-start"
                          >
                            Read More
                          </Text>
                        ) : (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            color="darkBlue.600"
                          >
                            Read More
                          </Text>
                        )}
                      </Flex>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
          <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
            <Box alignItems="center">
              <Pressable maxW="96">
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                    >
                      <HStack alignItems="center">
                        <Badge
                          colorScheme="darkBlue"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Business
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                          1 month ago
                        </Text>
                      </HStack>
                      <Flex>
                        {isFocused ? (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            textDecorationLine="underline"
                            color="darkBlue.600"
                            alignSelf="flex-start"
                          >
                            Read More
                          </Text>
                        ) : (
                          <Text
                            mt="2"
                            fontSize={12}
                            fontWeight="medium"
                            color="darkBlue.600"
                          >
                            Read More
                          </Text>
                        )}
                      </Flex>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
        </HStack>
      </VStack>
    </Center>
  );
}
export default HomeScreen;
