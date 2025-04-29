import React,{ useRef } from "react";

const Main = () => {
    const inputRef = useRef(null);
    
    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    return (
        <section className="m-5">
            <h1>Welcome to Git Challenge</h1>
            <input ref={inputRef} type="text" className="form-control" placeholder="Enter your name"/>
            <button className="btn btn-primary mt-3" onClick={handleClick}>Submit</button>
        </section>
    )
}

export default Main;