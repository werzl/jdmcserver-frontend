import React, { useState, useCallback } from "react";
import logo from "./logo.jpg";
import "./App.css";

import { Row, Col, Form, Button } from "react-bootstrap";
import "admin-lte/dist/css/adminlte.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import ServerPage from "./pages/ServerPage";

const App = () => {
    const [apiKey, setApiKey] = useState("");
    const [apiKeyConfirmed, setApiKeyConfirmed] = useState(false);

    const confirmApiKey = (e) => {
        e.preventDefault();
        console.info("confirmApiKey invoked.");
    };

    return (
        <>

            {!apiKeyConfirmed &&
                <>
                    <header className="App-header">
                        <img src={logo} className="" alt="logo" />
                        <p>
                            Jdmcserver
                        </p>

                        <Form className="w-25 mt-3 text-center">
                            <Form.Group>
                                <Form.Label>Enter an API Key</Form.Label>
                                <Form.Control type="password" placeholder="API-Key" onChange={e => setApiKey(e.target.value)}/>
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" onClick={e => confirmApiKey(e)}>
                                Submit
                            </Button>
                        </Form>
                    </header>
                </>
            }

            {apiKeyConfirmed &&
                <Router>
                    <Row>
                        <Col>
                            <TopNavBar />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/">
                                    <header className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <p>
                                            Jdmcserver
                                        </p>
                                        <a className="App-link"
                                            href="https://github.com/werzl/jdmcserver"
                                            target="_blank"
                                            rel="noopener noreferrer">GitHub
                                        </a>
                                    </header>
                                </Route>

                                <Route path="/Server">
                                    <ServerPage />
                                </Route>

                                <Route path="/Settings">
                                    <Row>
                                        <Col>
                                            <div className="inner-content">
                                                <h1>Settings</h1>
                                            </div>
                                        </Col>
                                    </Row>
                                </Route>

                            </Switch>
                        </Col>
                    </Row>
                </Router>
            }
        </>
    );
};

export default App;
