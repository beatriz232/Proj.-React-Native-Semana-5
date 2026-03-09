import { PRODUTOS } from "../data/produtos";

export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUTOS);
    }, 600);
  });
}

export async function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = PRODUTOS.find((p) => p.id === id);
      resolve(product);
    }, 400);
  });
}