import React, { useState, useEffect } from "react";

function Componente() {
    const [info, setInfo] = useState();

    const handleAsync = async() => {
        const user = await fetch("https://api.github.com/users/alinepatron");
        const userJson = await user.json();
        setInfo(userJson);
    }

    useEffect(() => {
        handleAsync();
    }, []);

    return (
        <>  
            <img src={info?.avatar_url}/>
            <p>{info?.name}</p>
            <p>@{info?.login}</p>
        </>
    );
}

export default Componente;
