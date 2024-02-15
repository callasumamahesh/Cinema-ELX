import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function AlertReview() {
  const [review,setReview] = useState();
  const [rating,setRating] = useState();
  const location = useLocation()
  console.log(location.state);
  // const {imageurl,id} = location.state;
  // console.log(imageurl)

  const handleData = (e) => {
      e.preventDefault()
      console.log(review,rating)
      localStorage.setItem('data',[review,rating])
  }



  return (
    <div className='alertBox'>
        <form>
          <textarea onChange={(e)=> setReview(e.currentTarget.value)} placeholder='Enter Your Review here' name="" id="textareaInAlert" cols="30" rows="10"></textarea>
          <span>Rating <input type='text' placeholder='4' id="inputInAlert" onChange={(e)=> {
            if (e.currentTarget.value > 5){
              window.alert('Please Enter value below 5')
            }
            else{
              setRating(e.currentTarget.value)
            }
            }}/> Out of 5</span>
          <button className="PrimaryButton" onClick={(e) => handleData(e)}>Submit</button>
        </form>
    </div>
  )
}

export default AlertReview