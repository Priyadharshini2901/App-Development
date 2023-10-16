import React, {useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { userLogin } from '../../service/api';
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('xuserToken'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userLogin(signin);
        if ((res.status) == "200" && (res.data.role)== "CUSTOMER")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phone);
            localStorage.setItem('xuserAddress', res.data.address);

            toast.success(` Welcome ${res.data.name} !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/dash');
            }, 1500);

        }
        else if((res.status) == "200" && (res.data.role)== "ADMIN"){
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

            toast.success(` Welcome ${res.data.name} !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/dash');
            }, 1500);
        }
        

    else {
        toast.error(` Invalid Email | Password !`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            navigate('/dash');
        }, 1500);
    }

};

    const handlegoogle = () =>
    {
      window.location.href="https://www.google.com";
    };
   
    const handlefb = () =>
    {
      window.location.href="https://www.facebook.com";
    };

    return (
        <>
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            <div className="modal" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                        <button className="btn btn-primary w-40 mb-4 mr-4" onClick={handlegoogle}>
                                            <span className="fa fa-google me-2"></span> Sign in With Google
                                        </button>
                                        <button className="btn btn-primary w-40 mb-4 ml-4"  onClick={handlefb}>
                                             <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                                        </button>
                            {/* <form onChange={submitHandler}> */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" onChange={handleChange} name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onChange={handleChange} name="password" className="form-control" id="password"/>
                                    </div>
                                         
                                        <button type="submit" className="btn btn-outline-primary w-20 mt-5 " data-bs-dismiss="modal" aria-label="Close" >Submit</button>
                                        {/* <ToastContainer/> */}
                            </form>
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

export default Login


// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { login } from '../../redux/userSlice';
// import { useNavigate } from 'react-router';


// const Login = () => {
//     const dispatch = useDispatch();
//   const navigate = new useNavigate();
//   const [formdata, setFormdata] = useState({
//     email: '',
//     password: '',

//   })
//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//   }
//   const submitHandler = (e) => {

//     console.log(formdata.email,formdata.password)
    
//     e.preventDefault();
//     dispatch(login({
//       username :formdata.email
//     }))
    
//     navigate('/dash')
//   }
//     return (
//         <>
//             {/* <!-- Button trigger modal --> */}
//             <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
//                <span className="fa fa-sign-in me-1"></span> Login
//             </button>

//             {/* <!-- Modal --> */}
//             <div className="modal" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Login</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <button className="btn btn-primary w-100 mb-4">
//                                <span className="fa fa-google me-2"></span> Sign in With Google
//                             </button>
//                             <button className="btn btn-primary w-100 mb-4">
//                                <span className="fa fa-facebook me-2"></span> Sign in With Facebook
//                             </button>
//                             <form onSubmit={submitHandler}>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                                     <input type="email" onChange={handleChange} name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
//                                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                                         <input type="password" onChange={handleChange} name="password" className="form-control" id="password"/>
//   </div>
//                                         <div className="mb-3 form-check">
//                                             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                                                 <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>                                    
                                           
//                                             <button type="submit" className="btn btn-outline-primary w-100 mt-5 " data-bs-dismiss="modal" aria-label="Close">Submit</button>
                                           
// </form>
//                                     </div>
//                                 </div>
//                 </div>
//                         </div>
//         </>
//                     )
// }
// export default Login









// function Login() {
//   const dispatch = useDispatch();
//   const navigate = new useNavigate();
//   const [formdata, setFormdata] = useState({
//     username: '',
//     password: ''
//   })
//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//   }
//   const submitHandler = (e) => {

//     console.log(formdata.username,formdata.password)
    
//     e.preventDefault();
//     dispatch(login({
//       username :formdata.username
//     }))
//     navigate('/dash')
//   }
//   return (
//     <>
//       <div className='auth-container'>
//         <div className='auth-wrapper'>
//           <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
//             <h1 className='auth-heading'>Login Form</h1>
//             <input type="text" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
//             <input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />

//             <button type='submit' className='auth-btn app-x-shadow'> Login </button>
//           </form>
//             <Link to='/register' className='auth-links'>Register</Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login

// import React from 'react'
// import { Link } from 'react-router-dom'
