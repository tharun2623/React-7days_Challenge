import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState();
    const [success, setSuccess] = React.useState(false);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError(null);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(null);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError(null);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError(null);
    };

    const handleSubmit = (e) => {
        
        if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                setError("Passwords do not match!");
            } else {
                e.preventDefault();
                setSuccess(true);
                navigate('/home',{
                    state: {
                        name: name,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                });
                console.log("Name: ", name);
                console.log("Email: ", email);
                console.log("Password: ", password);
                console.log("Confirm Password: ", confirmPassword);
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        } else {
            setError("All fields are required!");
        }
    };

    useEffect(() => {
        if(success){
            setTimeout(() => {
                setSuccess(false);
            }, 3000); // Show success message for 3 seconds before hiding it.
        }
    }, [success]);
    
    return (
        <div className="container">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {success && (
                <div className="alert alert-success" role="alert">
                    Form submitted successfully!
                </div>
            )}
            <h1 className="m-5">Sign Up Page</h1>
            <form className="form-row m-5" onSubmit={handleSubmit}>
                <div className="form-group col-md-6">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputName" 
                        placeholder="Name" 
                        onChange={handleNameChange} 
                        value={name}
                    />
                </div>
                <br />
                <div className="form-group col-md-6">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        placeholder="Email" 
                        onChange={handleEmailChange} 
                        value={email}
                    />
                </div>
                <br />
                <div className="form-group col-md-6">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword" 
                        placeholder="Password" 
                        onChange={handlePasswordChange} 
                        value={password}
                    />
                </div>
                <br />
                <div className="form-group col-md-6">
                    <label>Re-Enter Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputConfirmPassword" 
                        placeholder="Re-Enter Password" 
                        onChange={handleConfirmPasswordChange} 
                        value={confirmPassword} 
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </div>
    );
};

export default Login;