import React, { useState } from 'react'
import { isEmpty } from '../utils/Validation'
import { verifyLogin } from '../services/UserService'
import { LOGIN_USER } from '../Constants'
import { setObject } from '../DB/LocalStorage'

const elems = [
    { name: 'uname', type: 'text', label: 'User Name' },
    { name: 'password', type: 'password', label: 'Password' },
]

const Login = () => {

    const [login, setLogin] = useState({})
    const [error, setError] = useState({})

    const handleInputChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        if (isEmpty(e.target.value)) {
            error[e.target.name] = 'This field is required'
        } else {
            delete error[e.target.name]
        }
        setError(error)
    }

    const handleSubmit = () => {
        const user = verifyLogin(login)
        if (!isEmpty(user)) {
            setObject(LOGIN_USER, user)
            window.location.reload()
        }
    }

    return (
        <div className='AppBody'>
            <div className="card">
                <div className='title'>Login</div>
                {elems.map(each => (<div className='margin-b' key={each.name}>
                    <div><label>{each.label}</label></div>
                    <div><input className='Input' name={each.name} type={each.type} value={login[each.name] || ''} onChange={handleInputChange} /></div>
                    <div className='clr-red'>{error[each.name]}</div>
                </div>))}
                <div>
                    <button className='Button' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login