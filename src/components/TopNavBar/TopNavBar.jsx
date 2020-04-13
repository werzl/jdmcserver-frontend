import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./TopNavBar.css";


//import styles from "admin-lte/dist/js/adminlte";

const TopNavBar = ({logout}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <LinkContainer to="/jdmcserver-frontend/">
                    <img src={logo} className="nav-logo" alt="logo" />
                </LinkContainer>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/jdmcserver-frontend/Server">
                        <Nav.Link>Server</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/jdmcserver-frontend/Settings">
                        <Nav.Link>Settings</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Nav>
                    <Nav.Link onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavBar;