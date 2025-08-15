
import './Nav.css'
import sun from "@/assets/sun.png";
import { ThemeToggle } from './ThemeToggle';

export default function Nav() {
return(

    <nav className="nav">
          <h1 className="logo">Julia Becho <span className="highlight">Portfolio</span></h1>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Project</a>
            <a href="#"><span className="highlight">Contact</span></a>
           {/* <a href="#"><img src={sun} alt="Sun" className="button-img" /></a> */}
            <ThemeToggle/>
          </div>
        </nav>

)}


