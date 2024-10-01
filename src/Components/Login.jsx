import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Signin.css'

function Login() {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(true);
    function handelLogin() {
        alert("Login success");
        navigate('/');
    }
    return (
        <div className='signup-page'>
            <form action="" onSubmit={handelLogin}>
                <h1 className='text-orange-400'>Login to Your Account</h1>
                <input required type="email" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} />
                <div className='pass'>
                    <input required type={showpass ? "text" : 'password'} placeholder='Enter pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showpass ? <i onClick={() => setShowpass(false)} class="ri-eye-close-fill"></i> : <i class="ri-eye-fill" onClick={() => setShowpass(true)}></i>}
                </div>
                <button className='w-full bg-orange-400 p-3' type='Submit'>Login</button>
                <p onClick={() => navigate('/signin')}>New user?</p>
            </form>
        </div>
    )
}

export default Login
