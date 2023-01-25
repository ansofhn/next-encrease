
export const authentication = {
    setAccessToken : (token) =>{
        if(token){
            localStorage.setItem("access_token",token)
        }
    }
}
