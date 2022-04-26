import Cookie from 'js-cookie'

let date = new Date();
date.setTime(date.getTime() + (30 * 80 * 60 * 1000));

const UseSetCookie = (cookiename, toggle) => {
    Cookie.set(cookiename, toggle, {
      expires: date,
      secure: true,
      sameSite: 'strict',
      path: '/'
    })
}

export default UseSetCookie;