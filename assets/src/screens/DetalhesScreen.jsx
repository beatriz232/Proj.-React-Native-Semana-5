import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import BotaoCustom from "../components/BotaoCustom";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { formatCurrency } from "../utils/formatCurrency";
import { theme } from "../styles/theme";

export default function DetalhesScreen({ route }) {
  const { produto } = route.params;
  const { adicionar } = useContext(CarrinhoContext);

  function adicionarAoCarrinho() {
    adicionar(produto);

    Alert.alert(
      "Produto adicionado",
      `${produto.nome} foi adicionado ao carrinho.`,
      [{ text: "OK" }]
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.emoji}>{produto.imagem}</Text>

        <Text style={styles.nome}>{produto.nome}</Text>

        <Text style={styles.preco}>
          {formatCurrency(produto.preco)}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Descrição</Text>

        <Text style={styles.desc}>
          {produto.descricao}
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <BotaoCustom
          titulo="Adicionar ao Carrinho"
          onPress={adicionarAoCarrinho}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: 20,
  },

  emoji: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },

  nome: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 10,
    textAlign: "center",
  },

  preco: {
    fontSize: 20,
    fontWeight: "900",
    color: theme.colors.primary,
    marginTop: 8,
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  desc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
});