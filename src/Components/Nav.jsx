import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../Css/Nav.css'

function Nav() {
    let cart = useSelector((state) => state.cart.value);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <nav>
                <h3><i className="ri-shopping-bag-fill"></i>
                    <b>Shopy Globe</b></h3>
                <div className={`menu ${menuOpen ? 'slidemenu' : ''}`}>
                    <i
                        id="mnuclose"
                        className={`ri-arrow-right-line ${menuOpen ? '' : 'rotate180'}`}
                        onClick={toggleMenu}
                    ></i>
                    <Link className="options carticon" to={'/cart'} onClick={closeMenu}>
                        <i className="ri-shopping-cart-2-fill"></i>
                        <p>{cart.length}</p>
                    </Link>
                    <Link className="options" to={'/search'} onClick={closeMenu}>
                        <i className="ri-search-line"></i> Search
                    </Link>
                    <Link className="options" to={'/'} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="options" to={'/signin'} onClick={closeMenu}>
                        Signin <i className="ri-user-3-fill"></i>
                    </Link>
                </div>
                <i id="mnubtn" className="ri-menu-line" onClick={toggleMenu}></i>
            </nav>


        </>
    );
}

export default Nav;
