import Cookies from 'js-cookie'


// # Store Cookie Helpers (work with jwt - [json web token])
const storeJwt = (jwt:any) => Cookies.set("accessToken" , jwt , { secure : true })
const removeJwt = () => Cookies.remove("accessToken")

const getSession = () => { return Cookies.get("accessToken")  }

const getRole = () => { return Cookies.get('role')  }


export {

    storeJwt,
    removeJwt,
    getSession,
    getRole

}