import './App.css';
import Header from "./Header";
import Nav from './Nav';
import astronauta from "../assets/astronalta.png";
import { StarBackground } from './StarBackground';
import { Contact } from './Contact';
import { Typewriter } from 'react-simple-typewriter';
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound"
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element = {<Home />}/>
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    
    </BrowserRouter>

  )
}

export default App;
