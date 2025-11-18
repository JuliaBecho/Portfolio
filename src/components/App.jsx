import './App.css';
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound"
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;