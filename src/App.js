
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
    <Router>
   <Navbar />
 
<Routes>
<Route exact path ="/" element = {<Home/>} />
<Route exact path="/about" element={<About/>}/>
<Route exact path="/menu" element={<Menu/>}/>
<Route exact path="/contact" element={<Contact/>}/>
</Routes>
   
   
   
    </Router>
    </div>
  );
}

export default App;
