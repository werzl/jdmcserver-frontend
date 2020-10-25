import React, { useRef, useState, useEffect, useCallback } from "react";
import { Row, Col, Table } from "react-bootstrap";

import * as ServerStatus from "../helpers/ServerStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import "./Server.css";

const Server = ({ serverStatus, getServerStatus, startServer, stopServer, serverDetails }) => {
    const [timeRunning, setTimeRunning] = useState("");
    const [serverStartTime, setServerStartTime] = useState("");
    const timer = useRef(null);

    const toggleServer = () => {
        if (serverStatus === ServerStatus.STOPPED) {
            startServer();
        }
        if (serverStatus === ServerStatus.RUNNING) {
            stopServer();
        }
    };

    const updateTimeRunning = useCallback(() => {
        const startTime = new Date(serverDetails.launchTime);
        const now = new Date();
        let diff = now.getTime() - startTime.getTime();

        setServerStartTime(startTime.toGMTString());
        setTimeRunning(new Date(diff).toLocaleTimeString());
    }, [setServerStartTime, setTimeRunning, serverDetails]);

    useEffect(() => {
        if (serverStatus === ServerStatus.RUNNING) {
            timer.current = setInterval(async () => await updateTimeRunning(), 1000);
        }
        else {
            clearInterval(timer.current);
        }

        return () => {
            clearInterval(timer.current);
        };
    }, [setTimeRunning, serverStatus, updateTimeRunning]);

    return (
        <Row>
            <Col>
                <div className="inner-content">
                    <h1>
                        <Row>
                            <Col>
                                Jdmcserver: {serverStatus === ServerStatus.PENDING && <FontAwesomeIcon icon={faSpinner} spin />}
                                {serverStatus !== ServerStatus.PENDING && <>{serverStatus}</>}
                            </Col>
                            <Col>
                                {serverStatus !== ServerStatus.PENDING &&
                                    <FontAwesomeIcon className="refresh-icon" icon={faRedoAlt} onClick={getServerStatus} />
                                }
                            </Col>
                        </Row>
                    </h1>

                    <div className="server-details-content">
                        {serverStatus !== ServerStatus.PENDING &&
                            <Row className="mt-5">
                                <Col>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td className="launch-cell"><p>Launch/Stop Server</p></td>
                                                <td>
                                                    <label className="switch">
                                                        <input type="checkbox" checked={serverStatus === ServerStatus.RUNNING} onClick={toggleServer} readOnly />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        }

                        {serverStatus === ServerStatus.RUNNING &&
                            <Row>
                                <Col>
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <td>Server Address</td>
                                                <td>{serverDetails.publicDnsName}</td>
                                            </tr>
                                            <tr>
                                                <td>ip</td>
                                                <td>{serverDetails.publicIpAddress}</td>
                                            </tr>
                                            <tr>
                                                <td>Region</td>
                                                <td>{serverDetails.availabilityZone}</td>
                                            </tr>
                                            <tr>
                                                <td>Started</td>
                                                <td>{serverStartTime}</td>
                                            </tr>
                                            <tr>
                                                <td>Time Running</td>
                                                <td>{timeRunning}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Server;