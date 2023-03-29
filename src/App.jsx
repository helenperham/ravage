import react from 'react'
import { Route, Routes } from "react-router-dom"
import './global.css'
import NavBar from './navbar'
import Homepage from './homepage'
// import {layout} from './layout.jsx'
// import {footer} from './footer.jsx' - haven't added this file yet, but will add in 
// purpose of footer is to hold the subscription to mailchimp link

function App({data, layout, footer}) {
  console.log(data)
  return (
    <div>
        <NavBar />
        <Homepage />
      </div>
  )
}

export default App
