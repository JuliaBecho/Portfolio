import './App.css';
import Header from "./Header";
import Nav from './Nav';
import astronauta from "../assets/astronalta.png";
import { StarBackground } from './StarBackground';


function App() {
  return (


    <div className="app min-h-screen bg-background text-foreground overflow-x-hidden">
     
     <StarBackground></StarBackground>
    <Header> </Header>
    <Nav></Nav>
    
    <main className="intro-section">
        <div className="intro-text">
          <h1>Hi, I'm <span className="highlight">Julia</span> Becho</h1>
          <h2>Full-Stack Developer with a Passion for Front-End & UX/UI Design</h2>
        </div>
        <img src={astronauta} alt="Astronauta" className="hero-img" />
      </main>

    

    </div>
  );
}

export default App;
