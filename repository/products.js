import { http } from "../utils/http"

const url = {
        products : ()=> '/products'
}

const hooks = {
    getProducts : async () => {
         const response = http.get(url.products())
         const resp = await response
         return resp.body
    }
}

export const productsRepository = {url,hooks}