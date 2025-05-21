import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setemail] = useState({name:"Athul",age:29});
const [password, setpassword] = useState();
const navigate = useNavigate()


            const handleSubmit = (e) =>{
                e.preventDefault();
            navigate("/home")
            }
  return (
    <div>
            <form onSubmit={handleSubmit}>
        <label for="fname" >First name:</label><br/>
        <input onChange={(e)=>setemail(e.target.value)} required type="email" id="fname" name="fname"/><br/>
        <label for="lname">Last name:</label><br/>
        <input onChange={(e)=>setpassword(e.target.value)}  required type="password" id="lname" name="lname"/>
        <div>
        <button type='submit' className='button-style' style={{marginTop:10}}>Login</button>
        </div>
</form>
    </div>
  )
}
