import React from 'react'
import { faPaw, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LOGIN_USER, DOG_BREEDS, META_DATA, USER } from '../Constants'
import { getObject, remove } from '../DB/LocalStorage'

const Header = () => {

    const user = getObject(LOGIN_USER)

    const signout = () => {
        remove(LOGIN_USER)
        remove(DOG_BREEDS)
        remove(USER)
        remove(META_DATA)
        window.location.reload()
    }

    return (<div className='container Header'>
        <div className='title'>
            <FontAwesomeIcon icon={faPaw} className='pad-r-15' onClick={() => {window.location.href = '/'}} />
            Hello {user.name}
            <FontAwesomeIcon className='float-r' icon={faPowerOff} onClick={signout} />
        </div>
    </div>)

}

export default Header