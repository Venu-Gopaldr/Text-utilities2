import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import About from './components/About';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar cor="My-App" title="Home-Here" about="About-Us" link="Contact-Us"/>
      <div className="container"><Textform txt="Enter the text to Analze"/></div>
      {/* <div className="container"><Home/></div> */}
      {/* <div className="container"><Contact/></div> */}
      {/* <div className="container"><About a1="Accordion-head" a2="Accordion-body" a3="Accordion-foot"/></div> */}
    </>
  );
}

export default App;
