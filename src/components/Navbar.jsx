import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Books from "../pages/Books";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <header className="text-white body-font bg-orange-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </Link>

                <Link className="ml-3 text-xl text-white" to="/">
                  E-Library
                </Link>
              </a>

              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" to="/books">
                  Our Books
                </Link>
                <Link className="mr-5 hover:text-gray-900" to="/about">
                  About Us
                </Link>
                <Link className="mr-5 hover:text-gray-900" to="/support">
                  Support Us
                </Link>
                <Link className="mr-5 hover:text-gray-900" to="/contact">
                  Contact Us
                </Link>
              </nav>

              <Link to="login">
                <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded text-orange-500 mt-4 md:mt-0 mr-5">
                  Log In
                </button>
              </Link>
              <Link to="signup">
                <button className="inline-flex items-center bg-transparent text-white border border-white-500 py-1 px-3 focus:outline-none hover:bg-white hover:text-orange-500 rounded text-white mt-4 md:mt-0">
                  Sign Up
                </button>
              </Link>
            </div>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Router>
      </>
    );
  }
}

export default Navbar;
