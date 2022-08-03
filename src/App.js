import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    // <BrowserRouter>
    // <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route exact path='/' element={<Home />} />
    //       <Route path='/projects' element={<Projects />} />
    //       <Route path='/contact' element={<Contact />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter> 
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
