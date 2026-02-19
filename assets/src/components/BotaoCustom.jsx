import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoCustom({ titulo, onPress, variante = "primario" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.botao,
        variante === "secundario" && styles.secundario,
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[styles.texto, variante === "secundario" && styles.textoSec]}
      >
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#ff4d88",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  secundario: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff4d88",
  },
  textoSec: {
    color: "#ff4d88",
  },
});
