import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'


const Header = () => {
    const { user, logOut } = useFirebase();
    const [classname, setClassname] = useState(false)
    const history = useHistory();
    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setClassname(true)
            : setClassname(false)
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })
    return (
        <>
            <div className='nav-top d-flex'>
                <p><i class="fas fa-envelope"></i> booking @ratourism.com</p>
                <p><i class="fas fa-phone"></i> +971426606</p>
                <p>+971456456</p>
            </div>
            <Navbar fixed='top' className={classname ? 'nav-bg2' : 'nav-bg'} expand="lg">
                <Container fluid>
                    <img className='logo' src='https://i.ibb.co/nmYxyyB/logo-dark.png' alt="" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 ms-auto my-lg-0"

                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>


                            {user.email ? <Nav.Link as={Link} to="/myOrder" > My Orders</Nav.Link> : ''}
                            {user.email ? <Nav.Link as={Link} to="/manageOrder" > Manage All Orders</Nav.Link> : ''}
                            {user.email ? <Nav.Link as={Link} to="/addTours" > Add Tour</Nav.Link> : ''}
                            <Nav.Link as={Link} to='/home'>{user?.displayName}</Nav.Link>

                            {!user.email ? <Nav.Link as={Link} to="/login" ><button className='log-btn'>Login</button> </Nav.Link> :
                                <button className='log-btn' onClick={logOut}>Logout</button>}

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;