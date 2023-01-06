import { appConfig } from '../config/app'

const SuperAgent = require('superagent')

export const http = {
    get : async (url)=>{
       try{
        let req = await SuperAgent
        .get(`${appConfig.apiUrl}${url}`)
        return req
       } catch(e){
        console.log(e.message)
        return
       }

    }
}