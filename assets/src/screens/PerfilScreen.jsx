import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BotaoCustom from "../components/BotaoCustom";

export default function PerfilScreen({ navigation }) {
  function sair() {
    // Volta pro Auth e bloqueia retorno ao Main (tabs)
    navigation.replace("Auth");
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTxt}>👤</Text>
      </View>

      <Text style={styles.nome}>Usuário Senai</Text>
      <Text style={styles.email}>usuario@senai.com</Text>

      <View style={styles.areaBotao}>
        <BotaoCustom titulo="Sair do App" onPress={sair} variante="secundario" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#ffe6ef",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarTxt: { fontSize: 36 },
  nome: { fontSize: 20, fontWeight: "800" },
  email: { marginTop: 4, color: "#666", marginBottom: 20 },
  areaBotao: { width: "100%" },
});
