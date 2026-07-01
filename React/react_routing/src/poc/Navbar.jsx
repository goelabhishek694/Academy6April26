import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/listing">Listing</Link></li>

        {/* why Link over <a> tag */}

        {/* no page reloads: Link automatically handles navigation internally by updating react component state and browser history . this avoids reloading the entire application and losing the state.
        perofrmance: mainatains the perf benefits of SPA , by only re-rendering the compo that need to chnage rather than entire webpage .
        sync with router: it integrates seamlessly with react router setup. ensure that route chnages re in sync with app state and URL.   */}


        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/listing">Listing</a> */}
      </ul>
    </div>
  )
}

export default Navbar
