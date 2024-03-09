import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateListing from './pages/CreateListing'
import PrivateRoute from './components/PrivateRoute'
import UpdateListings from './pages/UpdateListings'
function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sign-in" element={<SignIn/>}/>
   <Route path="/sign-up" element={<SignUp/>}/>
   <Route path="/about" element={<About/>}/>
   <Route element={<PrivateRoute/>}>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/create-listing" element={<CreateListing/>}/>
   <Route path="/update-listing/:listingID" element={<UpdateListings/>}/>
   </Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
}
export default App