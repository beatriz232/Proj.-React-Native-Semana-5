import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import BotaoCustom from "../components/BotaoCustom";
import { theme } from "../styles/theme";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  function validarCampos() {
    if (!email.includes("@")) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return false;
    }

    if (senha.length < 4) {
      Alert.alert("Erro", "A senha deve ter pelo menos 4 caracteres.");
      return false;
    }

    return true;
  }

  function entrar() {
    if (!validarCampos()) return;

    setLoading(true);

    // Simulação de login
    setTimeout(() => {
      setLoading(false);

      login();
    }, 800);
  }

  const podeEntrar = email && senha;

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

        <BotaoCustom
          titulo={loading ? "Entrando..." : "Entrar"}
          onPress={entrar}
          disabled={!podeEntrar || loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary + "20",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },

  logo: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },

  sub: {
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
    color: "#666",
  },

  input: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
});
