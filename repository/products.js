import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  products: (page, filter, sorter, search, type) => {
  
    if (filter) {
      if (filter?.length > 0) {
        return `/products?page=${page}&limit=6&filter.category.id=$in:${filter}&sortBy=price:${sorter}&search=${
          search ? search : " "
        }&filter.type=${type?.length > 0 ? `$in:${type}` : ` `}`;
      } else {
        return `/products?page=${page}&limit=6&filter.category.id=&sortBy=price:${sorter}&search=${
          search ? search : " "
        }&filter.type=${type?.length > 0 ? `$in:${type}` : ` `}`;
      }
    } else {
      return `/products?page=${page}&limit=6&sortBy=price:${sorter}&search=${
        search ? search : " "
      }&filter.type=${type !== undefined ? `$in:${type}` : ` `}`;
    }
  },
  detailProduct: (id) => `/products/${id}`,
};

const hooks = {
  useProducts(page, filter, sorter, search, type) {
    return useSwr(url.products(page, filter, sorter, search, type), http.get);
  },
  useDetailProduct(id) {
    return useSwr(url.detailProduct(id), http.get);
  },
};

export const productsRepository = { url, hooks };
