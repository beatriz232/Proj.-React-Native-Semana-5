import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";
import { CarrinhoProvider } from "../context/CarrinhoContext";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={AppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  );
}
