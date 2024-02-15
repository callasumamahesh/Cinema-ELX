import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mainIcon from '../assets/mainIcon.png'

function Home() {
    const navigation = useNavigate();
    const [moviedata, setMovieData] = useState([])
    const [popularmovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upComingMovies, setUpComingMovies] = useState([])

    useEffect(() => {
        const MoviesData = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFjZTMyZGEwMjlhYTU0ZWM0ZjRiODFlMzVjMWQxZiIsInN1YiI6IjY1YmZjNGEwMTJjNjA0MDE3YzAyYzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qt-0a3Zat3vM2OIB0gW5tuLSCJSZVYH0t41w6P0vG48',
                        Accept: 'application/json',
                    },
                })
            const data = await response.json();
            setMovieData(data.results)

            // POPULAR MOVIES

            const popularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFjZTMyZGEwMjlhYTU0ZWM0ZjRiODFlMzVjMWQxZiIsInN1YiI6IjY1YmZjNGEwMTJjNjA0MDE3YzAyYzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qt-0a3Zat3vM2OIB0gW5tuLSCJSZVYH0t41w6P0vG48',
                        Accept: 'application/json',
                    },
                })
            const popularMovieData = await popularMovies.json()
            setPopularMovies(popularMovieData.results)

            //TOP RATED MOVIES

            const apiKey = 'f2ace32da029aa54ec4f4b81e35c1d1f'
            const allTopDataMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFjZTMyZGEwMjlhYTU0ZWM0ZjRiODFlMzVjMWQxZiIsInN1YiI6IjY1YmZjNGEwMTJjNjA0MDE3YzAyYzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qt-0a3Zat3vM2OIB0gW5tuLSCJSZVYH0t41w6P0vG48',
                        Accept: 'application/json',
                    },
                })
            const topratedmovies = await allTopDataMovies.json()
            setTopRatedMovies(topratedmovies.results)


            const upcomingmoviesdata = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFjZTMyZGEwMjlhYTU0ZWM0ZjRiODFlMzVjMWQxZiIsInN1YiI6IjY1YmZjNGEwMTJjNjA0MDE3YzAyYzI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qt-0a3Zat3vM2OIB0gW5tuLSCJSZVYH0t41w6P0vG48',
                        Accept: 'application/json',
                    },
                })
            const upcomingdata = await upcomingmoviesdata.json();
            setUpComingMovies(upcomingdata.results)

        }
        MoviesData()
    }, [])


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
                        <li><i onClick={() => navigation('/reviews')}className="fa-solid fa-video styleIcon" ></i></li>
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
                <section className='moviesSection'>

                    <h1 className='title'>Now Playing</h1>
                    <div className='AllMovies'>
                        {
                            moviedata.map((item) => {
                                return (
                                    <div key={item.id} className='singleMovie' onClick={() => navigation(`/movie/${item.title}`,
                                        { state: { title: item.title, imagepath: item.poster_path, id: item.id } })}>
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                                        <h1>{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h1 className='title'>Popular Movies</h1>
                    <section className='AllMovies'>
                        {
                            popularmovies.map((item) => {
                                return (
                                    <div key={item.id} className='singleMovie' onClick={() => navigation(`/movie/${item.title}`,
                                        { state: { title: item.title, imagepath: item.poster_path, id: item.id } })}>
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                                        <h1>{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h1 className='title'>Top Rated Movies</h1>
                    <section className="AllMovies">
                        {
                            topRatedMovies.map((item) => {
                                return (
                                    <div key={item.id} className='singleMovie' onClick={() => navigation(`/movie/${item.title}`,
                                        { state: { title: item.title, imagepath: item.poster_path, id: item.id } })}>
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                                        <h1>{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <h1 className='title'>Upcoming Movies</h1>
                    <section className="AllMovies">
                        {
                            upComingMovies.map((item) => {
                                return (
                                    <div key={item.id} className='singleMovie' onClick={() => navigation(`/movie/${item.title}`,
                                        { state: { title: item.title, imagepath: item.poster_path, id: item.id } })}>
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                                        <h1>{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home