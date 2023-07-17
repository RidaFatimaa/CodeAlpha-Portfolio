import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";

import Technologies from "./components/Technologies/Technologies";


function App() {
  console.log(
    "%cThis is not my original portfolio. this is just for the sake of internship.",
    "color: white; font-weight: 500; font-size:16px"
  );
 
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <Home />
          <Projects />
          <About />
        
          <Technologies />
  
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
