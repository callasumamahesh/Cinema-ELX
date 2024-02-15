import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import '../App.css'
import mainIcon from '../assets/mainIcon.png'

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating / 2 ? 'gold' : 'gray',
            fontSize: '1.2rem',
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  )
}


function SingleMovie() {

  let navigation = useNavigate();
  const [data, setData] = useState([])
  const [actors, setActors] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const [userName, setUserName] = useState('')
  const [dataOfReview, setDataOfReview] = useState([])
  const location = useLocation()
  const { title, imagepath, id } = location.state;

  useEffect(() => {
    const movieReview = async () => {
      const reviewResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f2ace32da029aa54ec4f4b81e35c1d1f`)
        .then(reviewResponse => reviewResponse.json())
        .then(data => setData(data.results))

      const similarMovies = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f2ace32da029aa54ec4f4b81e35c1d1f`)
        .then(similarMovies => similarMovies.json())
        .then(data => setSimilarMovies(data.results))

      const Actors = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f2ace32da029aa54ec4f4b81e35c1d1f`)
        .then(response => response.json())
        .then(data => setActors(data.cast))

    }
    movieReview()
  }, [id])

  const submitReview = () => {
    Swal.fire({
      title: 'Enter YOur Review',
      html: `
    <div>
    <textarea style='width:300px;height:200px;' id="textareaInAlert" row='10' placeholder="Enter your Review"></textarea><br>
    <input type="text" style='padding:10px' placeholder="Enter Reviewer name" id="userName"><br>
    <span>Rating<input type="text" id="inputInAlert" placeholder="4" />out of 5</span>
    </div>`,
      confirmButtonText: 'Submit',

    }).then((result) => {
      if (result.isConfirmed) {
        const reviewText = document.querySelector('#textareaInAlert').value;
        const reviewRating = document.querySelector('#inputInAlert').value;
        const userName = document.querySelector('#userName').value;

        // Update state after the alert is closed
        setReview(reviewText);
        setRating(reviewRating);
        setUserName(userName);
      }
    }
    )
  }

  useEffect(() => {


    const reviewSection = document.querySelector('#ReviewSection');
    const sectionSmall = document.createElement('section');
    const elementp = document.createElement('p');
    elementp.className = 'movieContent';
    elementp.innerText = review;
    const separateDiv = document.createElement('div');
    separateDiv.className = 'reviewdiv';
    const twoSectionDiv = document.createElement('div');
    twoSectionDiv.className = 'divReview2';
    const userImage = document.createElement('img');
    userImage.src = '';
    const userNameElement = document.createElement('h3');
    userNameElement.innerText = userName;
    twoSectionDiv.append(userImage, userNameElement)
    const stardiv = document.createElement('div');
    const stars = `${rating} Stars`
    stardiv.append(stars)
    separateDiv.append(twoSectionDiv, stardiv)
    sectionSmall.append(elementp, separateDiv)
    reviewSection.append(sectionSmall)
  }, [review, rating, userName])

  return (
    <>
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
        <div className='total'>
          <div className='movieDetails'>
            <img src={`https://image.tmdb.org/t/p/w200${imagepath}`} alt="" style={{ borderRadius: '10px' }} />
            <h2>{title}</h2>
            <button onClick={() => submitReview()}>Post Review</button>
            <h1 style={{ marginTop: '1rem', fontSize: '1.5rem' }}>Cast & Crew</h1>
            <section className="allSimilarMovies">

              {
                Object.values(actors).map((item, index) => {
                  return (
                    <div key={index} className='similarMovie'>
                      <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="" />
                      <h2>{item.name}</h2>
                    </div>
                  )
                })
              }

            </section>


            <h2 style={{ marginTop: '1rem', fontSize: '1.5rem' }}>Similar Movies</h2>
            <div className="allSimilarMovies">
              {
                Object.values(similarMovies).map((item, index) => {
                  return (
                    <div className='similarMovie' key={index} onClick={() => navigation(`/movie/${item.title}`,
                      { state: { title: item.title, imagepath: item.poster_path, id: item.id } })}>
                      <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                      <h1>{item.title}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>


          <section id="ReviewSection">
            <h1 style={{ margin: '2rem 1rem' }}>Reviews By Cinema Elk Users</h1>
            {
              data.map((EachAuthor, index) => {
                return (
                  <section key={index}>
                    <p className="movieContent">{EachAuthor.content.split(' ').slice(0, 50).join(' ')}</p>
                    <div className="reviewdiv">
                      <div className="divReview2">
                        <img src={`https://image.tmdb.org/t/p/w200${EachAuthor.author_details.avatar_path}`} className="authorsImage" alt="" />
                        <h3 style={{ marginLeft: '1rem' }}>{EachAuthor.author}</h3>
                      </div>
                      <div>
                        <StarRating rating={EachAuthor.author_details.rating}></StarRating>
                      </div>
                    </div>
                  </section>
                )

              })
            }
          </section>
        </div>
      </section>
    </>


  )
}

export default SingleMovie