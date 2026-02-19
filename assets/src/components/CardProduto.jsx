import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function CardProduto({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{item.imagem}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
      </View>

      <Text style={styles.ver}>Ver</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },
  emojiBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#fff0f6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  emoji: { fontSize: 26 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  preco: { fontSize: 14, fontWeight: "700", color: "#ff4d88" },
  ver: { fontSize: 14, fontWeight: "700", color: "#555" },
});
