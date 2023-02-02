import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  categories: () => `/category`,
};

const hooks = {
  useCategory() {
    return useSwr(url.categories(), http.get);
  },
};

export const categoriesRepository = { url, hooks };
