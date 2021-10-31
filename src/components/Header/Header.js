import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <Navbar className='m-0' bg="transparent" expand="lg">
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
    );
};

export default Header;