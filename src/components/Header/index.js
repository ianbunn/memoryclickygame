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
    <div className="navbar">
        <h4 className="title">Current Score:{props.currentScore}</h4>
        <h4 className="title">Top Score:{props.topScore}</h4>
    </div>
);

export default Header;
