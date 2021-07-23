import { getObject } from '../DB/LocalStorage'
import { USER } from '../Constants'

export const verifyLogin = (user) => {
    return getObject(USER).filter(each => each.uname === user.uname && each.password === user.password)[0]
}