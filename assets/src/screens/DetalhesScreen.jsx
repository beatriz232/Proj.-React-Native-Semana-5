import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import BotaoCustom from "../components/BotaoCustom";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function DetalhesScreen({ route }) {
  const { produto } = route.params;
  const { adicionar } = useContext(CarrinhoContext);

  function adicionarAoCarrinho() {
    adicionar(produto);
    Alert.alert("Adicionado!", `${produto.nome} foi para o carrinho.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{produto.imagem}</Text>
      <Text style={styles.nome}>{produto.nome}</Text>

      <Text style={styles.preco}>
        {produto.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>

      <Text style={styles.desc}>
        {produto.descricao}
      </Text>

      <BotaoCustom
        titulo="Adicionar ao Carrinho"
        onPress={adicionarAoCarrinho}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  emoji: { fontSize: 48, textAlign: "center", marginTop: 10 },
  nome: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 10,
    textAlign: "center",
  },
  preco: {
    fontSize: 18,
    fontWeight: "800",
    color: "#ff4d88",
    marginTop: 8,
    textAlign: "center",
  },
  desc: {
    marginTop: 18,
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },
});
