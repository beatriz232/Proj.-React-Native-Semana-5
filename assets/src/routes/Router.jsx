import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { CarrinhoProvider } from "../context/CarrinhoContext";

import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";

function Routes() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <AppTabs /> : <AuthStack />;
}

export default function Router() {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </CarrinhoProvider>
    </AuthProvider>
  );
}