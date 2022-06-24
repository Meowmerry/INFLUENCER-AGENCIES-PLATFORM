import Cookies from 'js-cookie'
import axios from 'axios';
const useAxios = axios.create()
const baseURL = "http://localhost:1337/api"


// # Store Cookie Helpers (work with jwt - [json web token])
const storeJwt = (jwt:any) => Cookies.set("accessToken" , jwt , { secure : true })
const removeJwt = () => Cookies.remove("accessToken")

const getSession = () => { return Cookies.get("accessToken")  }

const getRole = () => { return Cookies.get('role')  }


export {

    storeJwt,
    removeJwt,
    getSession,
    getRole,useAxios,baseURL

}