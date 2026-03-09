import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import BotaoCustom from "../components/BotaoCustom";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { formatCurrency } from "../utils/formatCurrency";
import { theme } from "../styles/theme";

export default function CarrinhoScreen({ navigation }) {
  const { itens, remover, limpar, subtotal, totalComEntrega } =
    useContext(CarrinhoContext);

  if (itens.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text style={styles.textoVazio}>
          Seu carrinho está vazio 🛒
        </Text>

        <View style={styles.fullWidth}>
          <BotaoCustom
            titulo="Continuar Comprando"
            onPress={() => navigation.navigate("HomeTab")}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.emoji}>{item.imagem}</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>

              <Text style={styles.info}>
                {formatCurrency(item.preco)} • Qtde: {item.quantidade}
              </Text>
            </View>

            <TouchableOpacity onPress={() => remover(item.id)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.subtotal}>
          Subtotal: {formatCurrency(subtotal)}
        </Text>

        <Text style={styles.total}>
          Total com entrega: {formatCurrency(totalComEntrega)}
        </Text>

        <View style={styles.spacing} />

        <BotaoCustom
          titulo="Continuar Comprando"
          onPress={() => navigation.navigate("HomeTab")}
          variante="secundario"
        />

        <View style={styles.spacing} />

        <BotaoCustom
          titulo="Limpar Carrinho"
          onPress={limpar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerVazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  textoVazio: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  fullWidth: {
    width: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },

  listContent: {
    paddingBottom: 16,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },

  emoji: {
    fontSize: 24,
    marginRight: 12,
  },

  infoContainer: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: "800",
  },

  info: {
    marginTop: 4,
    color: "#666",
    fontWeight: "600",
  },

  remover: {
    color: theme.colors.primary,
    fontWeight: "800",
  },

  footer: {
    marginTop: 10,
  },

  subtotal: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
  },

  total: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
    marginTop: 4,
  },

  spacing: {
    height: 10,
  },
});