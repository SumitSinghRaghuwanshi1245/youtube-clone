import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Darkmode from './components/Darkmode';
import Ai from "./components/Ai";
import Notes from "./components/Notes";
import Loading from "./loader/Loading";
import Top from "./components/Top";


function App() {
  const { Loading } = useAuth();
  return (
    
    <div className="app">
      
      <Darkmode />
      <Navbar/>

     
      <Ai/>
      <Top/>
      <Notes/> 
      <Routes>
             <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
      
    </div>
  );
}

export default App;