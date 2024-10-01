import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Signin.css'

function Signin() {
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(true);
    function handelSignin() {
        alert('Signup Successfully')
        navigate('/');
    }
    return (
        <div className='signup-page'>
            <form action="" onSubmit={handelSignin}>
                <h1 className='text-orange-400'>Welcome to Shopy Globe</h1>
                <input required type="text" placeholder='Enter Username' value={username} onChange={(e) => setusername(e.target.value)} />
                <input required type="email" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} />
                <div className='pass'>
                    <input required type={showpass ? "text" : 'password'} placeholder='Enter pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showpass ? <i onClick={() => setShowpass(false)} class="ri-eye-close-fill"></i> : <i class="ri-eye-fill" onClick={() => setShowpass(true)}></i>}
                </div>
                <button className='w-full bg-orange-400 p-3' type='Submit'>Signin</button>
                <p onClick={() => navigate('/login')}>Already a user?</p>
            </form>
        </div>
    )
}

export default Signin
