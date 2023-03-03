import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  review: () => "/review",
  detailReview: (id, page) => `/review/${id}?page=${page}`,
  createReview: () => `/review/create`,
};

const hooks = {
  getReview() {
    return useSwr(url.review(), http.get);
  },
  getDetailReview(id, page) {
    return useSwr(url.detailReview(id, page), http.get);
  },
};

const api = {
  createReview: (data) => {
    return http.post(url.createReview(), data);
  },
  editReview: (id, data) => {
    return http.put(url.detailReview(id), data);
  },
};

export const reviewRepository = { url, hooks, api };
