import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  products: (page, filter) => {
    if (filter) {
      if (filter?.length > 1) {
        return `/products?page=${page}&limit=6&filter.category.name=$in:${filter}`;
      } else {
        return `/products?page=${page}&limit=6&filter.category.name=$ilike:${filter}`;
      }
    } else {
      return `/products?page=${page}&limit=6`;
    }
  },
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
