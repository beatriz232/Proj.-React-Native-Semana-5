import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoCustom({
  titulo,
  onPress,
  variante = "primario",
  style,
  textStyle,
  disabled = false,
}) {
  const isSecundario = variante === "secundario";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        styles.botao,
        isSecundario && styles.secundario,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.texto,
          isSecundario && styles.textoSec,
          textStyle,
        ]}
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
  disabled: {
    opacity: 0.6,
  },
});