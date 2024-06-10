// ? All the React Router imports we need in our App component.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// ? Your navbar component
// ! Add this Navbar component first, and go to the Navbar component to make the needed changes to it!
import Navbar from "./components/Navbar"

// ? And here are all your page components. 
// ! Starting from the top, comment them out one by one and make routes for them below!

import Home from "./components/Home"
import About from "./components/About"
import CountriesList from "./components/CountriesList"
import ShowCountry from "./components/ShowCountry"

function App() {
  // ! Set up your page components with a router. Include your navbar component
  // ! for navigation, and your page components as routes. Test that you can change routes
  // ! when you navigate, and you can console the page when you do. Comment out each component and test
  // ! each route one at a time, from top to bottom.

  return (
    <Router> 
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path ="/about" element={<About />} />
    <Route path="/countries" element={<CountriesList />} />
    <Route path="/country/:countryName" element={<ShowCountry />} />
    </Routes>
    </Router>


  )
}

export default App
