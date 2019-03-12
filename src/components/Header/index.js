import React from "react";
import "./style.css";

const Header = props => (
    <nav className="navbar">
        <ul className="nav">
            <li className="brand"><a href="/"><h4>NFL Clicky Game</h4></a></li>
            <span className="scores">
                <li>Current Score: {props.currentScore}</li>
                <li>Top Score: {props.topScore}</li>
            </span>                
        </ul>
    </nav>
);

export default Header;
