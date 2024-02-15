import React, { useState } from 'react'
import { auth } from '../Components/firebase'
import mainImage from '../assets/mainImage.png'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup() {
  const navigation = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password).then((user) => {
      })
    }
    catch (error) {
      alert('Something went Wrong')
    }
  }

  return (
    <div className='login'>
      <div className='imageDiv'>
        <img src={mainImage} alt="" className='mainImage' />
      </div>
      <div className='loginPage'>
        <h1 style={{ color: 'white', margin: '1rem 0rem' }}>CINEMA ELX</h1>
        <div className='textAreas'>
          <input type="text" placeholder="Enter Email" className='inputType' onChange={(e) => setEmail(e.currentTarget.value)} />
          <input type="password" placeholder="Enter Password" className='inputType' onChange={(e) => setPassword(e.currentTarget.value)} />
        </div>
        <input type="text" placeholder='Enter Your Full Name' className='nameField' />
        <button onClick={() => handleSubmit()} className='secondaryButton'>Join the club</button>
        <p style={{ color: 'white', margin: '1rem 0rem' }}>Already a member <span onClick={() => { navigation('/') }} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Click here!</span></p>
        <div style={{ color: 'white' }}>
        <p>Note : </p>
        <p>Enter Correct Email and Password</p>
        <p>Password must Contain atleast 8 digits</p>
      </div>
      </div>
    </div>
  )
}

export default Signup