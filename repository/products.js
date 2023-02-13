import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  products: (page, filter, sorter) => {
    if (filter) {
      if (filter?.length > 1) {
        return `/products?page=${page}&limit=6&filter.category.name=$in:${filter}&sortBy=price:${sorter}`;
      } else {
        return `/products?page=${page}&limit=6&filter.category.name=$ilike:${filter}&sortBy=price:${sorter}`;
      }
    } else {
      return `/products?page=${page}&limit=6&sortBy=price:${sorter}`;
    }
  },
  detailProduct: (id) => `/products/${id}`,
};

const hooks = {
  useProducts(page, filter, sorter) {
    return useSwr(url.products(page, filter, sorter), http.get);
  },
  useDetailProduct(id) {
    return useSwr(url.detailProduct(id), http.get);
  },
};

export const productsRepository = { url, hooks };
