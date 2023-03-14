import React from "react"
import "./global.css"


export default function layout({ children }) {
  return (
    <div
      class="layout"
    >
      <Link to={`/`}>
        <h3
        >
          Ravage
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          color: #fefefe;
          font-family: "Atkinson Hyperlegible";
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}


 


   