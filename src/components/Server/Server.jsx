import React from "react";
import { Row, Col } from "react-bootstrap";

import * as ServerStatus from "../helpers/ServerStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Server.css";

const Server = ({ serverStatus }) => {

    const toggleServer = (event) => {
        console.info("toggleServer invoked.", event.target.checked);
    };

    return (
        <Row>
            <Col>
                <div className="inner-content">

                    <h1>
                        Jdmcserver status: {serverStatus === ServerStatus.PENDING && <FontAwesomeIcon icon={faSpinner} spin />}
                        {serverStatus !== ServerStatus.PENDING && <>{serverStatus}</>}

                    </h1>

                    {serverStatus !== ServerStatus.PENDING &&
                        <Row className="mt-3">
                            <Col md="3">
                                <p>Enable/Disable Server</p>
                            </Col>

                            <Col>
                                <label className="switch">
                                    <input type="checkbox" checked={serverStatus === ServerStatus.RUNNING} onClick={e => toggleServer(e)} />
                                    <span className="slider round">
                                        <p className="mt-5">I don't do anything yet</p>
                                    </span>
                                </label>
                            </Col>
                        </Row>
                    }
                </div>
            </Col>
        </Row>
    );
};

export default Server;