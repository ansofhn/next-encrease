import { http } from "../utils/http";
import useSwr from "swr";

const url = {
  getTransaction: () => "/transactions?limit=10000",
  PostTransaction: () => "/transactions/add",
};

const hooks = {
  useTransaction() {
    return useSwr(url.getTransaction(), http.get);
  },
};

const api = {
  createTransaction(data) {
    return http.post(url.PostTransaction(), data);
  },
};

export const transactionRepository = { url, hooks, api };
