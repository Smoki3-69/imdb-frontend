import React from 'react';
import './index.css';  // Make sure you have Tailwind's styles imported in your global CSS file
import Navbar from './components/Navbar.tsx';  // Make sure Navbar is a default export in Navbar.tsx
import Home from './Pages/Home.tsx'
import MovieList from './Pages/MovieList.tsx'
import MovieDetails from './Pages/MovieDetails.tsx'
import ActorDetails from './Pages/ActorDetails.tsx'
import TopRated from './Pages/TopRated.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/top-rated" element={<TopRated/>} />
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/actor/:id" element={<ActorDetails/>}/>
      
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
