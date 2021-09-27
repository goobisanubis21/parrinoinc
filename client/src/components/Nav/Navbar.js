import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import Logo from './apLogo.png';

function NavBar() {
    return (
        <div className='navBar-container'>
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <Link to='/'>
                    <div className="navbar-brand">
                        <img className='nav-logo' alt='logo' src={Logo}></img>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/'><div className="nav-link">Home</div></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/books'><div className="nav-link">Books</div></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/movies'><div className="nav-link">Movies</div></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/characters'><div className="nav-link">Characters</div></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/contact'><div className="nav-link">Contact</div></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar