import React from "react"
import { Link} from "react-router-dom"
import Country from "./Country"
import allCountries from "../countries/all"
import { useParams } from "react-router-dom"

function ShowCountry() {
  const [country, setCountry] = React.useState(null)
  const{countryName} =useParams()


  React.useEffect(() => {
     // ! For this to work, you'll need to make sure a 'countryName' is available for this component!
    async function fetchCountry() {
      const countryData = allCountries.filter(country => country.name.common.toLowerCase() === countryName.toLowerCase())
      setCountry(countryData[0])
    }
    fetchCountry()
  }, [countryName])

  if (!country) {
    return <p>Country Loading...</p>
  }

  return <section className="section">
    <div className="container">
      <h1>Hello Country Name!</h1>
      <Link to="/countries">{"⬅ Back to all countries"}</Link>
      <Country
        commonName={country.name.common}
        countryRegion={country.region}
        flagImage={country.flags.png}
      />
    </div>
  </section>
}

export default ShowCountry
