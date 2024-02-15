import React, { useState } from 'react'
import mainImage from '../assets/mainImage.png'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Components/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'

function Login() {


  const navigation = useNavigate()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  
  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password).
    then((user) => {
      if(password.length < 8){
        alert('Password Must Contain 8 digits')
      }
      navigation('/home')
    }).
    // catch((error) => {
    //   Swal.fire({
    //       title : 'Cinema ELX',
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //   });
    // })
    
    
    catch((error) => {
      window.alert('Something went Wrong')
    });
  }


  return (
    <div className='login'>
        <div className='imageDiv'>
            <img src={mainImage} alt="" className='mainImage'/>
        </div>
        <div className='loginPage'>
            <h1 style={{color:'white',margin:'1rem 0rem'}}>CINEMA ELX</h1>
            <input onChange={(e)=> setEmail(e.currentTarget.value)} type="text" placeholder="Enter Email" className='inputType'/>
            <input onChange={(e)=> setPassword(e.currentTarget.value)} type="password" placeholder="Password" className='inputType'/>
            <button onClick={() => handleLogin()} className='secondaryButton'>Login Now</button>
            <p style={{color:'white',margin:'1rem 0rem'}}>Join the club <span onClick={()=>{navigation('/signup')}} style={{textDecoration:'underline',cursor:'pointer'}}>Click here!</span></p>
            <div style={{color:'white'}}>
              <p>Note : </p>
              <p>Enter Correct Email and Password</p>
              <p>Password must Contain atleast 8 digits</p>
            </div>
        </div>
    </div>
  )
}

export default Login;