import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  products: (page, filter) =>
    `/products?page=${page}&limit=9&filter.category.name=$ilike:${filter}`,
  detailProduct: (id) => `/products/${id}`,
};

const hooks = {
  useProducts(page, filter) {
    return useSwr(url.products(page, filter), http.get);
  },
  useDetailProduct(id) {
    return useSwr(url.detailProduct(id), http.get);
  },
};

export const productsRepository = { url, hooks };
