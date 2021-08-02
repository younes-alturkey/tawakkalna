import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Services from "./screens/Services";
import HealthPassport from "./screens/services/HealthPassport";

const Tab = createBottomTabNavigator();
export default function Main() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "الرئيسية") {
              iconName = focused
                ? require("./assets/icons/active/home.png")
                : require("./assets/icons/notActive/home-gray.png");
            } else if (route.name === "حسابي") {
              iconName = focused
                ? require("./assets/icons/active/myAccount.png")
                : require("./assets/icons/notActive/myAccount-gray.png");
            } else if (route.name === "الخدمات") {
              iconName = focused
                ? require("./assets/icons/active/services.png")
                : require("./assets/icons/notActive/services-gray.png");
            } else if (route.name === "لوحة البيانات") {
              iconName = focused
                ? require("./assets/icons/active/dashboard.png")
                : require("./assets/icons/notActive/dashboard-gray.png");
            } else if (route.name === "المحفظة الرقمية") {
              iconName = focused
                ? require("./assets/icons/active/wallet.png")
                : require("./assets/icons/notActive/wallet-gray.png");
            } else {
            }

            // You can return any component that you like here!
            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#23AA9C",
          inactiveTintColor: "#AFAFAF",
          style: {
            backgroundColor: "#191b1c",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="حسابي" component={Profile} />
        <Tab.Screen name="لوحة البيانات" component={Home} />
        <Tab.Screen name="المحفظة الرقمية" component={Home} />
        <Tab.Screen name="الخدمات" component={ServicesRoot} />
        <Tab.Screen name="الرئيسية" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export function ServicesRoot() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="HealthPassport" component={HealthPassport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
