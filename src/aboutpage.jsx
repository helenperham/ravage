import react from 'react'
import './global.css'
import NavBar from './navbar'
// import {layout} from './layout.jsx'
// import {footer} from './footer.jsx' - haven't added this file yet, but will add in 
// purpose of footer is to hold the subscription to mailchimp link

function Homepage({data, layout, footer}) {
  console.log(data)
  return (
    <div>
        <h1>
          <p>About page </p>
        </h1>
        <>
          <p>Ravage is a 5 year project orchestrated by Tiff Gum Ying Cheng. Many of the scenes in it depended on a mood of nervous triumph, especially since the script was handwritten and put into some order using tape and was therefore almost of no help.

Email us: porkornopork at g-popular email service dot com.</p>
        </>

      </div>
  )
}

export default Homepage
