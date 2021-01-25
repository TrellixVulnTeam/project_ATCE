import React, { useState } from 'react';
import './AuthPage.scss'

export const AuthPage = () => {
    const { loading, request } = useHttp()
    const [form, setForm] = useState({ email: '', password: '' })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            console.log('Data', data);

        } catch (e) {

        }
    }



    return (
        <div classNameNameName='row'>
            <div classNameName="col s6 offset-s3">
                <h1>Link shorter</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title ">Авторизация</span>

                    </div>
                    <div className="input-field">
                        <input placeholder="Введите Email"
                            id="email"
                            type="text"
                            name='email'
                            onChange='{changeHandler}' />
                        <label className='white-text lighten-5' htmlFor="email">Email</label>
                    </div>

                    <div className="input-field">
                        <input placeholder="Введите пароль"
                            id="password"
                            type="password" name='password' onChange='{changeHandler}' />
                        <label className='white-text lighten-5' htmlFor="Пароль">Пароль</label>
                    </div>


                    <div className="card-action">
                        <button className='btn-reg btn yellow darken-4'>Войти</button>
                        <button className='btn grey  lighten-1 black-text' onClick={registerHandler} disabled={loading}>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}