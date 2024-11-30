import React from "react";
import "./index.css";
const Home = React.lazy(() => import("./home/home"));
const About = React.lazy(() => import("./about/About"));
const Skills = React.lazy(() => import("./skills/Skills"));
const Services = React.lazy(() => import("./Services/Services"));
const Contact = React.lazy(() => import("./contacts/Contact"));
const Footer = React.lazy(() => import("./footer/Footer"));
const Qualification = React.lazy(() => import("./qualification/Qualification"));
const ScrollUp = React.lazy(() => import("./scrollup/ScrollUp"));
const Work = React.lazy(() => import("./Works/Work"));
const Header = React.lazy(() => import("./headers/header"));

function App() {
  return (
    <div className="w-full gap-16 sm:px-5 px-3 flex flex-col items-center justify-center">
      <Header />
      <Home />
      <About />
       <Skills />
      {/* <Services />
      <Qualification />
      <Contact />
      <Footer />
      <ScrollUp />  */}
    </div>
  );
}

export default App;
