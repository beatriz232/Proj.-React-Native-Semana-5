import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../styles/theme";
import { APP_NAME } from "../constants";

import VitrineScreen from "../screens/VitrineScreen";
import DetalhesScreen from "../screens/DetalhesScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: "700",
        },
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name="Vitrine"
        component={VitrineScreen}
        options={{
          title: APP_NAME,
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: "Detalhes",
        }}
      />
    </Stack.Navigator>
  );
}