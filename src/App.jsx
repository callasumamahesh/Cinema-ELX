import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {Route,Routes} from 'react-router-dom'
import SingleMovie from './Components/SingleMovie'
import AlertReview from './Components/AlertReview'
import MyReviews from './Components/MyReviews'
import Reviews from './Components/Reviews'
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/movie/:id" element={<SingleMovie />}></Route>
      <Route path="/review" element={<AlertReview />}></Route>
      <Route path="/myreviews" element = {<MyReviews /> }></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
    </Routes>
    </>
  )
}

export default App
