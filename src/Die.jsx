import React from "react";

export default function Die(props) {
    return (
        <div className="die-face">
            <h2 className="die-numm">{props.value}</h2>
        </div>
    );
}
