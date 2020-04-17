import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <React.StrictMode>
      <div className="grid-container">
        <Header />
        <Nav />
        <Content />
        <Footer />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
