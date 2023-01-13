import useSwr from "swr"
import { http } from "../utils/http"

const url = {
    user : ()=> '/profile',
    detailUser : (id)=> `/profile/${id}`
}

const hooks = {
    getUser(){
        return useSwr(url.user(),http.get)
    },

    getDetailUser(id){
        return useSwr(url.detailUser(id),http.get)
    }
}

export const userRepository = {url,hooks}