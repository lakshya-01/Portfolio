import Footer from './components/Footer';
import Heroimg from './components/Heroimg';
import Heroimg2 from './components/Heroimg2';
import coding1 from "./assests/coding1.jpg"
import Navbar from './components/Navbar';
import './index.css';
import { Route, Routes} from "react-router-dom";
import Projects from './components/Projects';

function App() {
  return (
  <div className='bg-scroll' >
    <Navbar/>
    <Heroimg/>
    <Heroimg2/>
    <Projects/>
    <Footer/>
  </div>
  
  );
}

export default App;
