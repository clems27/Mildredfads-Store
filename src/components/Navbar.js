import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import{ButtonContainer} from './Button';

export default class Navbar extends Component{
    render(){
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            
                    {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk  */}
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                            products
                            </Link>
                        </li>
                        </ul>

                        <ul className="dropdown navbar-nav align-items-center">
                            <Link to="/men"className="dropbtn nav-link">men</Link>
                            <li className="dropdown-content nav-item ml-2">
                                < Link to="#" className="nav-link">link 1</Link>
                                <Link to="#" className="nav-link">link 2</Link>
                            </li>
                        </ul>

                        <ul className="dropdown navbar-nav align-items-center">
                            <Link to="/women"className="dropbtn nav-link">women</Link>
                            <li className="dropdown-content nav-item ml-2">
                                < Link to="#" className="nav-link">link 1</Link>
                                <Link to="#" className="nav-link">link 2</Link>
                            </li>
                        </ul>

                        <ul className="dropdown navbar-nav align-items-center">
                            <Link to="/accessories"className="dropbtn nav-link">accessories</Link>
                            <li className="dropdown-content nav-item ml-2">
                                < Link to="#" className="nav-link">link 1</Link>
                                <Link to="#" className="nav-link">link 2</Link>
                            </li>
                        </ul>


                        <ul className="dropdown navbar-nav align-items-center">
                            <Link to="/login" className="dropbtn nav-link">acoount</Link>
                            <li className="dropdown-content nav-item ml-2">
                                < Link to="/login" className="nav-link">login</Link>
                                <Link to="/signup" className="nav-link">sign up</Link>
                            </li>
                        </ul>



                        {/* <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/login" className="nav-link">
                            login
                            </Link>
                        </li>
                        </ul>

                        <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/signup" className="nav-link">
                            signup
                            </Link>
                        </li>
                        </ul> */}
                        <Link to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                                </span>
                                my cart
                            </ButtonContainer>
                        </Link>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper =styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`

