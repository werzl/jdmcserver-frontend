import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./TopNavBar.css";


//import styles from "admin-lte/dist/js/adminlte";

const TopNavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <LinkContainer to="/">
                    <img src={logo} className="nav-logo" alt="logo" />
                </LinkContainer>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/Server">
                        <Nav.Link>Server</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/Settings">
                        <Nav.Link>Settings</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Nav>
                    <Nav.Link><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavBar;