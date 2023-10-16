import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { NavLink } from 'react-router-dom'
import '../assets/Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {
const user=useSelector(selectUser)

    return (
        <>
        <div className='topbar-hello'>
          <NavLink to ="/" className='topbar-home'>
            <HomeIcon/>
          </NavLink>
          <NavLink to ="/mycart" className='topbar-mycart'>
            <AddShoppingCartIcon/>
          </NavLink>
                <h1 className='user username-color '>{user ? user.username : 'Guest'}</h1>
            </div>
        </>
    )
}

export default Navbar
