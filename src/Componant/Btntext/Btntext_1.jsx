import React from 'react';
import { FaBeer } from 'react-icons/fa';
import '../Css/Style.css'
import '../Responsive/Responsive.css'
import { NavLink } from 'react-router-dom';
const Btntext_1 = () => {
    return (
        <>
            <button className='btn_1st'> 
            <FaBeer /> <NavLink className= "nav-link" to="/about">Connect Twitter </NavLink> 
            </button>
        </>
    );
};

export default Btntext_1;