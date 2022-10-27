import React from "react";
import { HStack, Text, Button, VStack } from "native-base";
import * as Notifications from "expo-notifications";
import { Alert } from "native-base";

async function getNotificationToken() {
  const status: any = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const status: any = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      <Alert maxW="400" status="error" colorScheme="info">
        <HStack flexShrink={1} space={2} alignItems="center">
          <Alert.Icon />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            Fail to get notification token
          </Text>
        </HStack>
      </Alert>
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log(token);
  
  return token
}

export default function MainScreen() {
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
        <Text fontSize="2xl" bold color="#356290">
          Bạn chưa có mã số nhấn để lấy mã
        </Text>
        <Button size="md" rounded="4" width="100%" onPress={getNotificationToken}>
          Bấm để lấy Mã Số
        </Button>
      </VStack>
    </>
  );
}
