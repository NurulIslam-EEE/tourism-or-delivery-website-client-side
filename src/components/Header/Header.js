import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 ms-auto my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        {user.email ? <Nav.Link as={Link} to="myOrder" > My Orders</Nav.Link> : ''}
                        {user.email ? <Nav.Link as={Link} to="manageOrder" > Manage All Orders</Nav.Link> : ''}
                        <p> {user?.displayName}</p>
                        {!user.email ? <Nav.Link as={Link} to="/login" > Login</Nav.Link> :
                            <button onClick={logOut}>Logout</button>}

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;