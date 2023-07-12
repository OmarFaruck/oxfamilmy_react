import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Btntext_2nd = () => {
    return (
        <>
              <button className='btn_1st'> 
            <FaBeer /> <NavLink className= "nav-link" to="/">Connect Wallet</NavLink> 
            </button>
        </>
    );
};

export default Btntext_2nd;