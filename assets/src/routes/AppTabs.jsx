import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../styles/theme";

import HomeStack from "./HomeStack";
import CarrinhoScreen from "../screens/CarrinhoScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Tab = createBottomTabNavigator();

const icons = {
  HomeTab: {
    focused: "home",
    default: "home-outline",
  },
  CarrinhoTab: {
    focused: "cart",
    default: "cart-outline",
  },
  PerfilTab: {
    focused: "person",
    default: "person-outline",
  },
};

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
          elevation: 8,
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icon = icons[route.name];
          const iconName = focused ? icon.focused : icon.default;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Home" }}
      />

      <Tab.Screen
        name="CarrinhoTab"
        component={CarrinhoScreen}
        options={{ title: "Carrinho" }}
      />

      <Tab.Screen
        name="PerfilTab"
        component={PerfilScreen}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}