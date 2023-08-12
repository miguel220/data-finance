import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analystics from "./components/Analystics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <h1>
      <Navbar />
      <Hero />
      <Analystics />
      <Newsletter />
      <Cards />
      <Footer />
    </h1>
  );
}

export default App;
