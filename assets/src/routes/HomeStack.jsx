import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VitrineScreen from "../screens/VitrineScreen";
import DetalhesScreen from "../screens/DetalhesScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vitrine"
        component={VitrineScreen}
        options={{
          title: "SenaiMarket",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
