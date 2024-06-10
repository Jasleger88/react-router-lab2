import React from "react"
import Country from "./Country"
import allCountries from "../countries/all"

function CountriesList() {
  const [countries, updateCountries] = React.useState(null)

  React.useEffect(() => {
    console.log("The Countries List Page has mounted")
  }, [])

  React.useEffect(() => {
    updateCountries(allCountries)
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {countries?.map((country) => {
          return <Country 
            key={country.name.common}
            commonName={country.name.common}
            countryRegion={country.region}
            flagImage={country.flags.png}
          />
        })}
      </div>
    </div>
  </section>
}


export default CountriesList
