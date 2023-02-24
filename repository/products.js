import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  products: (page, filter, sorter, search) => {
    if (filter) {
      if (filter?.length > 0) {
        return `/products?page=${page}&limit=6&filter.category.id=$in:${filter}&sortBy=price:${sorter}&search=${
          search ? search : " "
        }`;
      } else {
        return `/products?page=${page}&limit=6&filter.category.id=&sortBy=price:${sorter}&search=${
          search ? search : " "
        }`;
      }
    } else {
      return `/products?page=${page}&limit=6&sortBy=price:${sorter}&search=${
        search ? search : " "
      }`;
    }
  },
  detailProduct: (id) => `/products/${id}`,
};

const hooks = {
  useProducts(page, filter, sorter, search) {
    return useSwr(url.products(page, filter, sorter, search), http.get);
  },
  useDetailProduct(id) {
    return useSwr(url.detailProduct(id), http.get);
  },
};

export const productsRepository = { url, hooks };
