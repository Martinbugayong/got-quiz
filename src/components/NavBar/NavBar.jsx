import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <span>Hello, {props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/' onClick={props.handleLogout} >LOG OUT</Link>
    </div>
    :
    <div>
        <Link to ='/login'> LOGIN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;