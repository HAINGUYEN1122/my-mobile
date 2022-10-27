import React, { Component } from "react";
import {
  Center,
  VStack,
  HStack,
  Box,
  Text,
  Badge,
  Pressable,
  Input,
  Button,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { ToggleDarkMode } from "../../components/toggleDarkMode";
import { sendNofitication } from "../../services/api";

const token = "ExponentPushToken[UNN5NRBiWWYKLf97sdugzF]";

function HomeScreen() {
  return (
    <>
      <VStack
        space={6}
        alignItems="center"
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        height="100%"
        padding={8}
      >
        <VStack space={4}>
          <Input
            mt={8}
            w={{
              base: "100%",
              md: "25%",
            }}
            size="md"
            rounded="4"
            InputLeftElement={
              <Icon
                as={<Ionicons />}
                name="person"
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Your code"
          />
          <Button size="md" rounded="4">
            Xác Nhận Mã Số
          </Button>
        </VStack>
        <Text fontSize="xl" bold color="#356290">
          Tình Trạng
        </Text>
        <HStack space={6} justifyContent="center">
          <Center>
            <Box>
              <Pressable maxW="96" alignItems="center" onPress={()=>{
                sendNofitication(token,"so hunrry!!",'Lets go!!!')
              }}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      // _light={isPressed?{ bg: "coolGray.200" } : { bg: "coolGray.100" }}
                      // _dark={isPressed?{ bg: "blueGray.200" } : { bg: "blueGray.100" }}
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
                      w="150px"
                      borderColor="coolGray.300"
                    >
                      <VStack alignItems="center">
                        <Badge
                          colorScheme="error"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          error
                        </Badge>
                        <Text fontSize={24}>🌭</Text>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
          <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
            <Box alignItems="center">
              <Pressable maxW="96" onPress={()=>{
                sendNofitication(token,"so hunrry!!",'Lets go!!!')
              }}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      // _light={isPressed?{ bg: "coolGray.200" } : { bg: "coolGray.100" }}
                      // _dark={isPressed?{ bg: "blueGray.200" } : { bg: "blueGray.100" }}
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
                      w="150px"
                      borderWidth="1"
                      borderColor="coolGray.300"
                    >
                      <VStack alignItems="center">
                        <Badge
                          colorScheme="secondary"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Danger
                        </Badge>
                        <Text fontSize={24}>🌭</Text>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
        </HStack>
        <HStack space={6} justifyContent="center">
          <Center>
            <Box>
              <Pressable maxW="96" alignItems="center">
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      // _light={isPressed?{ bg: "coolGray.200" } : { bg: "coolGray.100" }}
                      // _dark={isPressed?{ bg: "blueGray.200" } : { bg: "blueGray.100" }}
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
                      w="150px"
                      borderColor="coolGray.300"
                    >
                      <VStack alignItems="center">
                        <Badge
                          colorScheme="warning"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Warning
                        </Badge>
                        <Text fontSize={24}>🌭</Text>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
          <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
            <Box alignItems="center">
              <Pressable maxW="96" onPress={() => console.log("I'm Pressed")}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      // _light={isPressed?{ bg: "coolGray.200" } : { bg: "coolGray.100" }}
                      // _dark={isPressed?{ bg: "blueGray.200" } : { bg: "blueGray.100" }}
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
                      w="150px"
                      borderColor="coolGray.300"
                    >
                      <VStack alignItems="center">
                        <Badge
                          colorScheme="danger"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          So Hungry
                        </Badge>
                        <Text fontSize={24}>😆</Text>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </Center>
        </HStack>
      </VStack>
    </>
  );
}
export default HomeScreen;
