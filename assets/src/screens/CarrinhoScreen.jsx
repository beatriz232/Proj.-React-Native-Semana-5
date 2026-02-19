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

export default function CarrinhoScreen({ navigation }) {
  const { itens, remover, limpar, total } = useContext(CarrinhoContext);

  if (itens.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text style={styles.textoVazio}>Seu carrinho está vazio 🛒</Text>

        <View style={styles.areaBotao}>
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
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.emoji}>{item.imagem}</Text>

            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>

              <Text style={styles.info}>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
                • Qtde: {item.quantidade}
              </Text>
            </View>

            <TouchableOpacity onPress={() => remover(item.id)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>
          Total:{" "}
          {total().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>

        <View style={{ height: 10 }} />

        <BotaoCustom
          titulo="Continuar Comprando"
          onPress={() => navigation.navigate("HomeTab")}
          variante="secundario"
        />

        <View style={{ height: 10 }} />

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
  areaBotao: {
    width: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },

  emoji: {
    fontSize: 24,
    marginRight: 12,
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
    color: "#ff4d88",
    fontWeight: "800",
  },

  footer: {
    marginTop: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
  },
});

