import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

import { PRODUTOS } from "../data/produtos";
import CardProduto from "../components/CardProduto";
import { theme } from "../styles/theme";

export default function VitrineScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de API
    setTimeout(() => {
      setProdutos(PRODUTOS);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
        />
        <Text style={styles.loadingText}>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardProduto
            item={item}
            onPress={() =>
              navigation.navigate("Detalhes", {
                produto: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  lista: {
    padding: 16,
    paddingTop: 8,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },

  loadingText: {
    marginTop: 10,
    color: "#666",
  },
});