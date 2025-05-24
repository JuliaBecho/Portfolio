import Boneco from "./assets/Boneco.png";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Julia Becho</h1>
          <div className="nav-links">
            <a href="#">About me</a>
            <a href="#">Projects</a>
            <button className="icon-button">☰</button>
          </div>
        </nav>
        <img src={Boneco} alt="Boneco" className="hero-image" />
      </header>

      <main className="intro-section">
        <h1>Welcome to My Personal Portfolio!</h1>
        <h2>Full-Stack Developer with a Passion for Front-End & UX/UI Design</h2>
        <p>
          Hi, I’m Julia — a full-stack web developer with a strong focus on front-end development and a true passion for UX/UI design. I love creating user-friendly, visually appealing digital experiences that combine clean code with thoughtful design.
          <br /><br />
          While I’m skilled across the full stack, I naturally gravitate toward the front end, where creativity meets functionality. With experience in UX/UI, I enjoy designing interfaces that are both beautiful and intuitive.
          <br /><br />
          Feel free to explore my work, and don’t hesitate to reach out if you’d like to connect or collaborate!
        </p>
      </main>
    </div>
  );
}

export default App;
