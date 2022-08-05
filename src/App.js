import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import IndividualProjects from './components/IndividualProjects./IndividualProjects';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <IndividualProjects />
      <Contact />
    </div>
  );
}

export default App;
