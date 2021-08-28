import React from 'react'

function Login() {
    return (
        <div className='login-page container'>
            <div className=''>
                <h2>LOGIN</h2>
                <form >
                    <label>Passport Number</label>
                    <input
                        type='Number'
                        placeholder='9830****' />
                </form>
            </div>
        </div>
    )
}

export default Login
