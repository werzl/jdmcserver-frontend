import React, { useState, useCallback } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import "admin-lte/dist/css/adminlte.min.css";

import logo from "./logo.jpg";
import "./App.css";
import GetServerStatusAjaxHelper from "./components/helpers/GetServerStatusAjaxHelper";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import ServerPage from "./pages/ServerPage";

const App = () => {
    const [apiKey, setApiKey] = useState("");
    const [apiKeyConfirmed, setApiKeyConfirmed] = useState(false);

    const confirmApiKey = (e) => {
        e.preventDefault();
        getServerStatus();
    };

    const getServerStatus = useCallback(async () => {
        await GetServerStatusAjaxHelper.get(apiKey)
            .then(() => {
                setApiKeyConfirmed(true);
            }).catch(() => {
                toast.error("API Key Invalid.", { autoClose: 2500, hideProgressBar: true });
            });
    }, [apiKey, setApiKeyConfirmed]);

    const logout = () => {
        setApiKey("");
        setApiKeyConfirmed(false);
    };

    return (
        <>
            <ToastContainer />

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
                                <Form.Control type="password" placeholder="API-Key" onChange={e => setApiKey(e.target.value)} />
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
                            <TopNavBar logout={logout}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/jdmcserver-frontend/">
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

                                <Route path="/jdmcserver-frontend/Server">
                                    <ServerPage apiKey={apiKey}/>
                                </Route>

                                <Route path="/jdmcserver-frontend/Settings">
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
