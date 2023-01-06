import  useSwr  from "swr"
import { appConfig } from "../config/app"
import { http } from "../utils/http"


const url = {
        products : ()=> '/products',
        detailProduct : (id)=> `/products/${id}`
}

const hooks = {
    useProducts(){
        return useSwr(url.products(),http.get)
    },
    useDetailProduct(id){
        return useSwr(url.detailProduct(id),http.get)
    }
}

export const productsRepository = {url,hooks}