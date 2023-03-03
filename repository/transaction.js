import { http } from "../utils/http";
import useSwr from "swr";

const url = {
  getTransaction: () => "/transactions?limit=10000",
  getTransactionDetail: (id) => `/transactions/${id}`,
  PostTransaction: () => "/transactions/add",
  cancelTransaction: (id) => `/transactions/canclled/${id}`,
  acceptTransaction: (id) => `/transactions/accepted/${id}`,
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
  putTransactionDetail(id, data) {
    return http.put(url.getTransactionDetail(id), data);
  },
  cancelTransacion(id, data) {
    return http.put(url.cancelTransaction(id), data);
  },
  acceptTransaction(id, data) {
    return http.put(url.acceptTransaction(id), data)
  }
};

export const transactionRepository = { url, hooks, api };
