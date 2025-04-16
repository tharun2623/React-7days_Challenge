import React from "react";

const Main = ({name,age,bio}) => {

    return (
        <section className="m-5">
            <div>
                <h2>Name:</h2>
                <p>{name}</p>
            </div>
            <div>
                <h2>Age:</h2>
                <p>{age}</p>
            </div>
            <div>
                <h2>Bio:</h2>
                <p>{bio}</p>
            </div>
        </section>
    )
}

export default Main;