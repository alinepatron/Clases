import React from "react";

function Titulo(props) {
    const {texto} = props;
    return (
        <React.Fragment>
            <h3>{texto}</h3>
        </React.Fragment>
    )
}

export default Titulo;
