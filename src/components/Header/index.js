import React from "react";
import "./style.css";

// function Header(props) {
//     return (
//         <div>
//             <h4 className="title">Current Score:{props.currentScore}</h4>
//             <h4 className="title">Top Score:{props.topScore}</h4>
//         </div>
//     )
// }

const Header = props => (
    <nav className="navbar">
        <ul className="nav">
            <li className="brand"><h4>Memory Clicky Game</h4></li>
            <li>Current Score:{props.currentScore}</li>
            <li>Top Score:{props.topScore}</li>
        </ul>
    </nav>
);

export default Header;
