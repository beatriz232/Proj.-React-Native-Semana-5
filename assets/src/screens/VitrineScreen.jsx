import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { PRODUTOS } from "../data/produtos";
import CardProduto from "../components/CardProduto";

export default function VitrineScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardProduto
            item={item}
            onPress={() => navigation.navigate("Detalhes", { produto: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  lista: { padding: 16 },
});
