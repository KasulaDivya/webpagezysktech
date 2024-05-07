//import logo from './logo.svg';
import './App.css';
import Blogsection from './components/Blogsection/Blogsection';
//import Ctasection from './components/CTAsection/Ctasection';
import Questionary from './components/FandQ/Questionary';
import Footer from './components/Footer/Footer';
//import Fotter from './components/Footer/Footer';
import Testimonialsection from './components/Testinmonialsection/Testimonialsection';
import Featuressection2 from './components/features-section2/featuressection';
import FeaturesSection1 from './components/features-sections/features';
import Dropdown from './components/headersection/dropdownsection';
import Section2 from './components/headersection/section2';
import Section3 from './components/headersection/section3';

function App() {
  return (
    <div className="App">
      <Dropdown></Dropdown>
      <Section2></Section2>
      <Section3/>
      <FeaturesSection1></FeaturesSection1>
      <Testimonialsection></Testimonialsection>
      <Featuressection2></Featuressection2>
      <Questionary></Questionary>
      <Blogsection></Blogsection>
      <Footer></Footer>   
    </div>
  );
}

export default App;
