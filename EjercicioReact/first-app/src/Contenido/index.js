import React from "react";

function Contenido(props) {
    const {texto} = props;
    return (
        <React.Fragment>
            <p>{texto}</p>
        </React.Fragment>
    )
}

export default Contenido;
