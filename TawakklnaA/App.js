import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Login from "./screens/Login";
import store from "./redux/store";
import { Provider } from "react-redux";
import HealthPassport from "./screens/services/HealthPassport";

const Tab = createBottomTabNavigator();
export default function App() {
  const [loading, setLoading] = useState(() => true);
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#23AA9C" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HealthPassport" component={HealthPassport} />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
