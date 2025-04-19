import React from "react";
import { useLocation } from "react-router-dom";


const Homepage = () => {
    const location = useLocation();
    const {name, email} = location.state || {};
    return(
        <div>
            <h1>Welcome to the Homepage {name}</h1>
            <p>Your email id: {email}</p>
        </div>
    )
}

export default Homepage;