import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "pink",
//     textDecoration: "none",
//     color: "white",
// };

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navButtons'>
                <NavLink
                    className="ravageHyperLink"
                    to="/"
                    exact
                >
                    Ravage
                </NavLink>
                <NavLink
                    className= "aboutHyperlink"
                    to="/about"
                    exact
                >
                    About
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;