import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import PrivateRoute from './components/PrivateRoute';
import UpdateListings from './pages/UpdateListings';
import MapComponent from './pages/Events';
import Categories from './pages/Category';
import Cricket from './pages/category/Cricket';
import Badminton from './pages/category/Badminton';
import Football from './pages/category/Football';
import Basketball from './pages/category/Basketball';
import Tennis from './pages/category/Tennis';
import Accessories from './pages/Accessories';
import Connect from './pages/connect';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex">
        <SideBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/events" element={<MapComponent />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/cricket" element={<Cricket />} />
            <Route path="/category/badminton" element={<Badminton />} />
            <Route path="/category/football" element={<Football />} />
            <Route path="/category/basketball" element={<Basketball />} />
            <Route path="/category/tennis" element={<Tennis />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/connect" element={<Connect />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/update-listing/:listingID" element={<UpdateListings />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
