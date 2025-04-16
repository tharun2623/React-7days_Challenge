import React, { useState } from 'react'

const App = () => {
    const [name, setName] = useState();

    return (
        <div>
            <p>hello {name}</p>
            <Child1 name={name} setName={setName} />
        </div>
    )
}

const Child1 = ({name, setName}) => {
    
    return (
        <>
            <p>Child Component: No Div in Child 1 {name}</p>
            <GrandChild name={name} setName={setName}/>
        </>
    )
}

const GrandChild = ({name, setName}) => {
    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <p>Grand child</p>
            <input type="text" placeholder='enter name' onChange={handleChange} />
        </>
    )
}

export default App;
