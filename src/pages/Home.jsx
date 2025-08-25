import '@/components/App.css';
import Header from "@/components/Header";
import Nav from '@/components/Nav';
import astronauta from "@/assets/astronalta.png";
import { StarBackground } from '@/components/StarBackground';
import { Contact } from '@/components/Contact';
import jellyfish from "@/assets/Jellyfish.png"
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '@/contexts/ThemeContext';
import BubbleBackground from '../components/bubblesBackground';


function Home() {
  const {theme}=useTheme();

  return (


    <div className="app min-h-screen bg-background text-foreground overflow-x-hidden">
     
    {
      theme === "light" ? <BubbleBackground/> : <StarBackground/>
    }
    
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
          
            </span></h2>
        </div>
            {
              theme === "dark" ? (
                <img src={astronauta} alt="Astronauta" className="hero-img" />
              ) : (
                <img src={jellyfish} alt="jellyfish" className="hero-img light" />
              )
            }
      </main>

     <Contact></Contact>

    </div>
  );
}

export default Home;
