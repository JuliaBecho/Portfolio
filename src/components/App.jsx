import './App.css';
import Header from "./Header";
import Nav from './Nav';
import astronauta from "../assets/astronalta.png";
import { StarBackground } from './StarBackground';
import { Contact } from './contact';
import { Typewriter } from 'react-simple-typewriter';


function App() {
  return (


    <div className="app min-h-screen bg-background text-foreground overflow-x-hidden">
     
     <StarBackground></StarBackground>
    <Header> </Header>
    <Nav></Nav>
   

    
    <main className="intro-section">
        <div className="intro-text">
          <h1>Hi, I'm <span className="highlight">Julia</span> Becho</h1>
          <h2>Full-Stack Developer with a Passion for <span className='highlight'> 
            <Typewriter
            words={[
              "UX/UI desing",
              "Front-end Development",
              "Web performace"
              
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
            
            
            />
          
            </span>   </h2>
        </div>
        <img src={astronauta} alt="Astronauta" className="hero-img" />
      </main>

     <Contact></Contact>

    </div>
  );
}

export default App;
