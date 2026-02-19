import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import BotaoCustom from "../components/BotaoCustom";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    // Sem API: só navega para Main e bloqueia voltar pro Login
    navigation.replace("Main");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.logo}>🛍️ SenaiMarket</Text>
        <Text style={styles.sub}>Entre para continuar</Text>

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />

        <BotaoCustom titulo="Entrar" onPress={entrar} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6ef",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  logo: { fontSize: 26, fontWeight: "800", textAlign: "center" },
  sub: { textAlign: "center", marginTop: 6, marginBottom: 18, color: "#666" },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
});
