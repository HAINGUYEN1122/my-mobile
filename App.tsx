import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/homeScreen/homeScreen";
import MainScreen from "./screens/mainScreen/mainScreen";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";
import * as Notifications from 'expo-notifications';

const Tab = createBottomTabNavigator();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              if (route.name === "Home") {
                return (
                  <Icon
                    as={AntDesign}
                    name="home"
                    size={size}
                    // color={color}
                    _dark={{ color: "blueGray.900" }}
                    _light={{ color: "blue.300" }}
                  />
                );
              } else {
                return (
                  <Icon
                    as={AntDesign}
                    name="flag"
                    size={size}
                    // color={color}
                    _dark={{ color: "blueGray.900" }}
                    _light={{ color: "blue.300" }}
                  />
                );
              }
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "My home",
              headerStyle: {
                backgroundColor: "#2eaadc",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Tab.Screen name="Main" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
