import Notfoundimage from '@/assets/notfoundimage.png'; 
import astronautspace from '@/assets/astronautspace.gif'; 
import './NotFound.css';


function NotFound() {
  return (
    <div className="not-found">
      <img src={astronautspace} alt="Not Found" className="not-found-img" />
      <h1 className="not-found-text">404 - Page not found</h1>
    </div>
  );
}

export default NotFound;