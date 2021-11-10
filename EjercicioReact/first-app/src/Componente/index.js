import React, { useState, useEffect } from "react";

function Componente() {
    const [info, setInfo] = useState();
    const [info2, setInfo2] = useState();

    const handleAsync = async() => {
        const user = await fetch("https://api.github.com/users/alinepatron");
        const userJson = await user.json();
        setInfo(userJson);
    }
    const handleAsync2 = async() => {
        const user = await fetch("https://api.github.com/users/erickgtzh");
        const userJson = await user.json();
        setInfo2(userJson);
    }

    useEffect(() => {
        handleAsync();
        handleAsync2();
    }, []);

    return (
        <>  
            <img src={info?.avatar_url}/>
            <p>{info?.name}</p>
            <p>@{info?.login}</p>

            <img style={{borderRadius:20}} src={info2?.avatar_url}/>
            <p>{info2?.name}</p>
            <p>@{info2?.login}</p>
        </>
    );
}

export default Componente;
