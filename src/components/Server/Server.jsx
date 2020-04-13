import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./Server.css";

const Server = ({ serverRunning }) => {
    const [running, setRunning] = useState(serverRunning);

    const toggleServer = (event) => {
        console.info("toggleServer invoked.", event.target.checked);
        setRunning(event.target.checked);
    };

    return (
        <Row>
            <Col>
                <div className="inner-content">

                    <h1>Jdmcserver is {running ? "Running" : "Stopped"}</h1>

                    <Row className="mt-3">
                        <Col md="3">
                            <p>Enable/Disable Server</p>
                        </Col>

                        <Col>
                            <label className="switch">
                                <input type="checkbox" defaultChecked={running} onClick={e => toggleServer(e)} />
                                <span className="slider round"></span>
                            </label>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Server;