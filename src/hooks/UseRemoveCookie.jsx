import Cookie from 'js-cookie'

const UseRemoveCookie = (cookiename) => {
    return Cookie.remove(cookiename)
}

export default UseRemoveCookie;