import React, { useRef, useState, useEffect, useCallback } from "react";
import { Row, Col, Table } from "react-bootstrap";

import * as ServerStatus from "../helpers/ServerStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import "./Server.css";

const Server = ({ serverStatus, getServerStatus, startServer, stopServer, serverDetails }) => {
    const [timeRunning, setTimeRunning] = useState("");
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
        let spaceSplit = serverDetails.launchTime.split(" ");
        let slashSplit = spaceSplit[0].split("/");
        let launchDateTime = `20${slashSplit[2]}-${slashSplit[1]}-${slashSplit[0]}T${spaceSplit[1]}:${spaceSplit[2]}`;

        let prevTime = new Date(launchDateTime);
        let thisTime = new Date();
        let diff = thisTime.getTime() - prevTime.getTime();

        setTimeRunning(new Date(diff).toLocaleTimeString());
    }, [setTimeRunning, serverDetails]);

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
                                                <td>{serverDetails.launchTime}</td>
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