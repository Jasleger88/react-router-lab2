import React from "react"
import { Link } from "react-router-dom"


// ! Use the Link component from react-router-dom to link up the below pages.
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              {/* // ! These will need to be links to the correct routes: */}
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/countries" className="navbar-item">
                All Countries
              </Link>
              <Link to="/country/:countryName" className="navbar-item">
                My Country
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}


export default Navbar
