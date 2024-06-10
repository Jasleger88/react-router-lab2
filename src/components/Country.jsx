// ! Have it so that when you click on one of the cards, could be either the title or the whole card (up to you), 
// ! it should take you to the ShowCountry page for that country. 
// ! For example if I click on the card for France, it should take you to /country/france and show that country.
import { Link } from "react-router-dom"

function Country({ commonName, countryRegion, flagImage }) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <Link to={`/country/${commonName}`}>
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{commonName}</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={flagImage} alt={commonName} />
        </figure>
      </div>
      <div className="card-content">
        <h5>{countryRegion}</h5>
      </div>
    </div>
    </Link>
  </div>
}

export default Country