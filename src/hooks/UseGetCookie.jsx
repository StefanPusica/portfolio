import Cookie from 'js-cookie'

const UseGetCookie = (cookiename) => {
    return Cookie.get(cookiename)
}

export default UseGetCookie;