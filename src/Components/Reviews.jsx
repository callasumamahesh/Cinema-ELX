import React from 'react'
import mainIcon from '../assets/mainIcon.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Reviews() {
  const navigation = useNavigate()
  const [id, setId] = useState(866398)
  const [reviewdata, setReviewData] = useState([])

  const getReviews = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFjZTMyZGEwMjlhYTU0ZWM0ZjRiODFlMzVjMWQxZiIsInN1YiI6IjY1YmZjNGEwMTJjNjA0MDE3YzAyYzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qt-0a3Zat3vM2OIB0gW5tuLSCJSZVYH0t41w6P0vG48'
      }
    };
    console.log(id)
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
    const response = await data.json()
    setReviewData(response.results)
  }

  return (

    <div>
      <section>
        <header>
          <div style={{ display: 'flex' }}>
            <img src={mainIcon} alt="" onClick={() => { navigation('/home') }} />
            <h1 style={{ textAlign: 'center', fontSize: '16px', margin: '1rem 0rem' }}>Cinema Elx</h1>
          </div>
          <button className='PrimaryButton' onClick={() => navigation('/')}>Logout</button>
        </header>

        <nav className='forMobile' style={{ width: '100%', height: 'auto' }}>
          <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyle: 'none', margin: '0.5rem 0rem' }}>
            <li><i onClick={() => navigation('/home')} className="fa-solid fa-house styleIcon" ></i></li>
            <li><i onClick={() => navigation('/reviews')} className="fa-solid fa-video styleIcon" ></i></li>
            <li><i onClick={() => navigation('/myreviews')} className="fa-solid fa-user styleIcon" ></i></li>
          </ul>
        </nav>
      </section>

      <section className='down'>
        <nav className='forLaptop' style={{ height: 'auto', }}>
          <ul style={{ display: 'flex', margin: '1rem 0rem', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', listStyle: 'none', margin: '0.5rem 0rem' }}>
            <li onClick={() => navigation('/home')}><i className="fa-solid fa-house styleIcon" ></i></li>
            <li><i onClick={() => navigation('/reviews')} className="fa-solid fa-video styleIcon" ></i></li>
            <li onClick={() => navigation('/myreviews')}><i className="fa-solid fa-user styleIcon" ></i></li>
          </ul>
        </nav>
        <div className="ReviewsSeparate">
          <div className='searchDiv'>
            <input style={{
              padding: '10px',
              margin: '0.3rem',
              outline: 'none',
              borderRadius: '9px',
            }} type="number" onChange={(e) => { setId(e.currentTarget.value) }} placeholder='Enter Movie Id' />
            <button onClick={() => getReviews()} className='PrimaryButton'>Get Reviews</button>
          </div>
          <section className="ReviewSection">
            {
              reviewdata.map((item) => {
                return (
                  <div style={{border:'2px solid gray', borderRadius:'10px',margin:'1rem 0rem',width:'350px',height:'auto'}}>
                    <h1 style={{ margin: '1rem' }}>{item.author}</h1>
                    <p className="movieContent1">{item.content.split(' ').splice(0, 50).join(' ')}</p>
                  </div>
                )
              })

            }
          </section>
        </div>
      </section>
    </div>

  )
}

export default Reviews

//866398