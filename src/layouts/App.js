import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="app">
            <header>
              {<Header />} <div className="shadow"></div>
            </header>
            <main>
              <aside>{<Navigation />}</aside>
              <section className="page">{<Page />}</section>
            </main>
          </div>
          <footer>{<Footer />}</footer>
        </>
      </Router>
    );
  }
}

export default App;
