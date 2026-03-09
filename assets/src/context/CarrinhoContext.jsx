import React, { createContext, useState, useMemo } from "react";
import { DELIVERY_FEE } from "../constants";

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(produto) {
    setItens((prevItens) => {
      const itemExistente = prevItens.find(
        (item) => item.id === produto.id
      );

      if (itemExistente) {
        return prevItens.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...prevItens, { ...produto, quantidade: 1 }];
    });
  }

  function remover(id) {
    setItens((prevItens) =>
      prevItens.filter((item) => item.id !== id)
    );
  }

  function limpar() {
    setItens([]);
  }

  // 🔥 useMemo evita recalcular sempre
  const subtotal = useMemo(() => {
    return itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }, [itens]);

  const totalComEntrega = useMemo(() => {
    return itens.length > 0 ? subtotal + DELIVERY_FEE : 0;
  }, [subtotal, itens]);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionar,
        remover,
        limpar,
        subtotal,
        totalComEntrega,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}