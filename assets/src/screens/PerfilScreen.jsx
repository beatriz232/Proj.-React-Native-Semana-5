import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import BotaoCustom from "../components/BotaoCustom";
import { theme } from "../styles/theme";
import { AuthContext } from "../context/AuthContext";

export default function PerfilScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  function confirmarSaida() {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair da sua conta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: logout,
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTxt}>👤</Text>
        </View>

        <Text style={styles.nome}>Usuário Senai</Text>
        <Text style={styles.email}>usuario@senai.com</Text>

        <View style={styles.divider} />

        <BotaoCustom
          titulo="Sair do App"
          onPress={confirmarSaida}
          variante="secundario"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    elevation: 4,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: theme.colors.primary + "20",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatarTxt: {
    fontSize: 36,
  },

  nome: {
    fontSize: 20,
    fontWeight: "800",
  },

  email: {
    marginTop: 4,
    color: "#666",
    marginBottom: 20,
  },

  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 20,
  },
});
