import { Typewriter } from 'react-simple-typewriter';

import { useTheme } from '@/contexts/ThemeContext';

import Nav from '@/components/Nav';
import { Contact } from '@/components/Contact';
import AboutMe from '@/components/AboutMe';
import Skills from "@/components/Skills"
import Projects from '@/components/Project';

import astronauta from "@/assets/astronalta.png";
import jellyfish from "@/assets/Jellyfish.png"
import { StarBackground } from '@/components/StarBackground';
import BubbleBackground from '@/components/bubblesBackground';

import '@/components/App.css';


function Home() {
  const { theme } = useTheme();

  return (
    <div className="app min-h-screen bg-background text-foreground overflow-x-hidden">
      {theme === "light" ? <BubbleBackground /> : <StarBackground />}

      <Nav />

      <main className="intro-section">
        <div className="intro-text">
          <h1>Hi, I'm <span className="highlight">Julia</span> Becho</h1>
          <h2>Full-Stack Developer with a big passion for <span className='highlight'>
            <Typewriter
              words={[
                "UX/UI Desing",
                "Front-end Development",
                "Web Performance"
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

        <div>
          {
            theme === "dark" ? (
              <img src={astronauta} alt="Astronauta" className="hero-img" />
            ) : (
              <img src={jellyfish} alt="jellyfish" className="hero-img light" />
            )
          }
        </div>
      </main>

      <AboutMe />
      <Skills />
      <Projects></Projects>
      <Contact></Contact>

    </div>
  );
}

export default Home;