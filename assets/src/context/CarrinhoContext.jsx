import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(produto) {
    setItens((prev) => {
      const existe = prev.find((item) => item.id === produto.id);

      if (existe) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function remover(id) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  function limpar() {
    setItens([]);
  }

  function total() {
    return itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }


  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionar, remover, limpar, total }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
