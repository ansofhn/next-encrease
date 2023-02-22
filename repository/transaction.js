import { http } from "../utils/http";
import useSwr from "swr";

const url = {
  getTransaction: () => "/transactions?limit=10000",
  getTransactionDetail: (id) => `/transactions/${id}`,
  PostTransaction: () => "/transactions/add",
};

const hooks = {
  useTransaction() {
    return useSwr(url.getTransaction(), http.get);
  },
  useTransactionDetail(id) {
    return useSwr(url.getTransactionDetail(id), http.get);
  },
};

const api = {
  createTransaction(data) {
    return http.post(url.PostTransaction(), data);
  },
};

export const transactionRepository = { url, hooks, api };
