import { Nav, Navbar, NavLink } from 'react-bootstrap';
import {Link } from 'react-router-dom'

function Navigation(){
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarscroll" data-bs-toggle="collapse"/>
            <Navbar.Collapse id="navbarscroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/contact">Contact</NavLink>
                    <NavLink eventKey="3" as={Link} to="/about">About</NavLink>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default  Navigation;