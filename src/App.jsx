import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Home />
    </div>
  );
}

export default App;
