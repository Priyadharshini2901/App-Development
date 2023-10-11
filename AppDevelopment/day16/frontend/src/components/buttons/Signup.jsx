import React from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { userRegister } from '../../service/api';
import { UserAuth } from '../Auth/UserAuth';
const Signup = () => {
    const nav = useNavigate();

    const [signup, setSignup] = useState({
        // name:'',
        // email:'',
        // password:'',
        // role:'customer'
    });

    const handleChange = (e) => {

        console.log(signup);
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(signup);
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(` Signup Successfull !`, {
                position: "bottom-right",
                autoClose: 100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // setTimeout(() => {
            //     nav('/login');
            // }, 1500);

        }
        else if (res.data==="Something went wrong!" && res.status==="400") {
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" onChange={handleChange} className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" onChange={handleChange} className="form-control" id="password" />
                                </div>
                                <div>
                                    <label htmlFor="exampleRole" className="form-label">Role</label>
                                    <input type ="role" onChange={handleChange} className='form-control' id ="role"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                                <ToastContainer/>
     
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

