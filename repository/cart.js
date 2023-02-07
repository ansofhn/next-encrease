import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  getCart: () => "/cart",
  getDetailCart: (id) => `/cart/${id}`,
  updateCart: (id) => `/cart/update/${id}`,
  deleteCart: (id) => `/cart/remove/${id}`,
  postCart: () => "/cart/create",
  increaseCart: () => "/cart/increase",
  decreaseCart: () => "/cart/decrease",
};

const hooks = {
  useCart() {
    return useSwr(url.getCart(), http.get);
  },

  useDetailCart(id) {
    return useSwr(url.getDetailCart(id), http.get);
  },
};

const api = {
  createCart(data) {
    return http.post(url.postCart(), data);
  },
  increaseCart(data) {
    return http.post(url.increaseCart(), data);
  },
  decreaseCart(data) {
    return http.post(url.decreaseCart(), data);
  },
  deleteProduct(id) {
    return http.del(url.deleteCart(id));
  },
};

export const cartRepository = { url, hooks, api };
