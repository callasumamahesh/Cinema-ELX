import React from 'react'
import mainIcon from '../assets/mainIcon.png'
import '../App.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { ReactDOM } from 'react-dom'

const StarRating = ({rating}) => {
    const totalStars = 5;
    return(
      <div>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < rating  ? 'gold' : 'gray',
              fontSize: '1.2rem',
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
    ) 
   }

function MyReviews() {
    const navigation = useNavigate();


let myreviews = [{
    'username' : 'Umamahesh',
    'stars':'3',
    'review' : 'Good Movie, Actors done there performance very well, climax is very good.',
    'url' : "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
},{
    'username' : 'Umamahesh',
    'stars':'4',
    'review' : 'One of the best movie i never watch and the hero is a magic man, how he do like that, avery great actor and a very great movie.',
    'url' : "/yrafAmPQgr5RWEe67BrbHu7jiB.jpg",
},
{
    'username' : 'Umamahesh',
    'stars':'2',
    'review' : 'No movie is not good , actors performance also not good. one time watched movie that is it.',
    'url' : "/y9xS5NQTBnFjDoXhSFQeGxlmkoM.jpg",
}
]

const handleEdit = (uniqueNumber) => {
    
let reviewSingle = document.querySelector('.className'+uniqueNumber);
let divinunique = reviewSingle.querySelector('#totalReview').innerHTML;
let starsindiv = reviewSingle.querySelector('#starp').innerHTML;
    Swal.fire({
        title:'Enter Your Review',
        html:`
        <div>
            <textarea style='width:280px;height:200px;' id="textareaInAlert" row='10'>${divinunique}</textarea><br>
            <span>Rating<input type="text" id="inputInAlert" placeholder="4" />out of 5</span>
        </div>`,
        confirmButtonText :'Submit',
        preConfirm : () => {            
            let afterEdit = document.querySelector('#textareaInAlert').value;
            const afterRate = document.querySelector('#inputInAlert').value;
            reviewSingle.querySelector('#totalReview').innerHTML = afterEdit;
        }
      })
}

const handleDelete = (uniqueNumber) => {
    let reviewSingle = document.querySelector('.className'+uniqueNumber);
    reviewSingle.remove()
}

  return (
    <div>
        <section>
            <header>
                <div style={{display:'flex'}}>
                    <img src={mainIcon} alt="" onClick={()=>{navigation('/home')}}/>
                    <h1 style={{textAlign:'center',fontSize:'16px',margin:'1rem 0rem'}}>Cinema Elx</h1>
                </div>
                <button className='PrimaryButton' onClick={() => navigation('/')}>Logout</button>
            </header>
            <nav className = 'forMobile' style={{width:'100%',height:'auto'}}>
                <ul style={{display:'flex',justifyContent:'space-around',alignItems:'center',listStyle:'none',margin:'0.5rem 0rem'}}>
                    <li onClick={() => navigation('/home')}><i className="fa-solid fa-house styleIcon" ></i></li>
                    <li> <i onClick={() => navigation('/reviews')} className="fa-solid fa-video styleIcon" ></i></li>
                    <li  onClick={() => navigation('/myreviews')}><i className="fa-solid fa-user styleIcon" ></i></li>
                </ul>
            </nav>
        </section>

        <section className='down'>
            <nav className='forLaptop' style={{height:'auto',}}>
                <ul style={{display:'flex',margin:'1rem 0rem',flexDirection:'column',justifyContent:'space-around',alignItems:'center',listStyle:'none',margin:'0.5rem 0rem'}}>
                    <li onClick={() => navigation('/home')}><i className="fa-solid fa-house styleIcon" ></i></li>
                    <li><i onClick={() => navigation('/reviews')}className="fa-solid fa-video styleIcon" ></i></li>
                    <li onClick={() => navigation('/myreviews')}><i className="fa-solid fa-user styleIcon" ></i></li>
                </ul>
            </nav>

            <section>
                <h1>My Reviews</h1>
                <div className='allReviews'>
                    {myreviews.map((item, index) => {
                        const singleReview1 = 'singleReview'
                        const uniqueNumber = parseInt(Math.random() * 10000)
                        return(
                            <div key={index} className={ `${singleReview1} className${uniqueNumber}`}>
                                <div>
                                    <div style={{width:'auto',height:'2rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <h2 style={{marginRight:'0.5rem'}}>{item.username}</h2>
                                        <p id="starp"><StarRating id="starRating" rating={item.stars}>{item.stars}</StarRating></p>
                                    </div>
                                    <p id="totalReview">{item.review}</p>
                                    <div>
                                    {/* <button className='PrimaryButton'>Read More</button> */}
                                    <i onClick = {() => handleEdit(uniqueNumber)} className="fa-solid editIcon fa-pen-to-square"></i>
                                    <i onClick = {() => handleDelete(uniqueNumber)} style={{cursor:'pointer'}} className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                                <div >
                                    <img style={{width:'100px',height:'100px',margin:'0.5rem 0.7rem'}} src={`https://image.tmdb.org/t/p/w200${item.url}`} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
        
    </div>
  )
}

export default MyReviews