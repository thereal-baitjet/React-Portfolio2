import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";


function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
      <Header />
      <Particles />
      <Route exact path="/about" component={About} />
      <Route exact path="/works" component={Works} />
      <Contact />
      </Router>
    </div>
  );
}

export default App;