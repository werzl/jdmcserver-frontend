import React from "react";
import { Row, Col } from "react-bootstrap";

import * as ServerStatus from "../helpers/ServerStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import "./Server.css";

const Server = ({ serverStatus, getServerStatus, startServer, stopServer }) => {

    const toggleServer = () => {
        if (serverStatus === ServerStatus.STOPPED) {
            startServer();
        }
        if (serverStatus === ServerStatus.RUNNING) {
            stopServer();
        }
    };

    return (
        <Row>
            <Col>
                <div className="inner-content">

                    <h1>
                        Jdmcserver status: {serverStatus === ServerStatus.PENDING && <FontAwesomeIcon icon={faSpinner} spin />}
                        {serverStatus !== ServerStatus.PENDING &&
                            <>
                                {serverStatus}
                                <FontAwesomeIcon className="refresh-icon" icon={faRedoAlt} onClick={getServerStatus} />
                            </>
                        }
                    </h1>

                    {serverStatus !== ServerStatus.PENDING &&
                        <Row className="mt-5">
                            <Col md="3">
                                <p>Launch/Stop Server</p>
                            </Col>

                            <Col>
                                <label className="switch">
                                    <input type="checkbox" checked={serverStatus === ServerStatus.RUNNING} onClick={toggleServer} readOnly/>
                                    <span className="slider round"></span>
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