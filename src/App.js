import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Phonebook from "./components/Phonebook";

function App() {
  return (
    <>
      <NavBar />
      <Phonebook />

      <Footer />
    </>
  );
}

export default App;
