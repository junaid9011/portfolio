import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Skill from './Components/Skills/Skill';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Certificate from './Components/Certificates';

function App() {
  return (
    <div >
      <Header/>
      <Intro/>
      <About/>
      <Skill/>
      <Certificate/>
      <Project/>
  
      <Footer/>
      
    </div>
  );
}

export default App;
