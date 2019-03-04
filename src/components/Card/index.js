import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" id={props.id} onClick={() => props.hasBeenClicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>ID:</strong> {props.id}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Clicked:</strong> {props.clicked}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
