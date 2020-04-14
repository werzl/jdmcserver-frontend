import React, { useState, useEffect, useCallback } from "react";

import StartServerAjaxHelper from "../components/helpers/ServerAPI/StartServerAjaxHelper";
import StopServerAjaxHelper from "../components/helpers/ServerAPI/StopServerAjaxHelper";
import GetInstanceDetailsAjaxHelper from "../components/helpers/ServerAPI/GetInstanceDetailsAjaxHelper";
import GetServerStatusAjaxHelper from "../components/helpers/ServerAPI/GetServerStatusAjaxHelper";
import ToastHelper from "../components/helpers/ToastHelper";
import * as ServerStatus from "../components/helpers/ServerStatus";
import Server from "../components/Server/Server";

const ServerPage = ({ apiKey }) => {
    const [serverStatus, setServerStatus] = useState(ServerStatus.PENDING);
    const [serverDetails, setServerDetails] = useState({});

    const startServer = async () => {
        setServerStatus(ServerStatus.PENDING);

        await StartServerAjaxHelper.post(apiKey)
            .then(() => {
                setTimeout(() => getServerStatus(), 15000);
            })
            .catch((error) => {
                ToastHelper.displayErrorMessage("Error when starting the server.");
                console.error(error);
            });
    };

    const stopServer = async () => {
        setServerStatus(ServerStatus.PENDING);

        await StopServerAjaxHelper.post(apiKey)
            .then(() => {
                setTimeout(() => getServerStatus(), 15000);
            })
            .catch((error) => {
                ToastHelper.displayErrorMessage("Error when stopping the server.");
                console.error(error);
            });
    };

    const getServerDetails = useCallback(async () => {
        await GetInstanceDetailsAjaxHelper.get(apiKey)
            .then((response) => {
                setServerDetails(response);
            }).catch((error) => {
                ToastHelper.displayErrorMessage("Couldn't get server details.");
                console.error(error);
            });
    }, [apiKey, setServerDetails]);

    const getServerStatus = useCallback(async () => {
        setServerStatus(ServerStatus.PENDING);

        await GetServerStatusAjaxHelper.get(apiKey)
            .then((response) => {
                if (response.status === ServerStatus.RUNNING) {
                    setServerStatus(ServerStatus.RUNNING);
                    getServerDetails();
                }
                if (response.status === ServerStatus.STOPPED) {
                    setServerStatus(ServerStatus.STOPPED);
                }
                if (response.status === ServerStatus.PENDING) {
                    setServerStatus(ServerStatus.PENDING);
                    getServerStatus();
                }
            }).catch((error) => {
                ToastHelper.displayErrorMessage("Couldn't check server status.");
                setServerStatus(ServerStatus.ERROR);
                console.error(error);
            });
    }, [apiKey, setServerStatus, getServerDetails]);

    useEffect(() => {
        getServerStatus();
    }, [getServerStatus]);

    return (
        <Server
            serverStatus={serverStatus}
            getServerStatus={getServerStatus}
            startServer={startServer}
            stopServer={stopServer} 
            serverDetails={serverDetails} />
    );
};

export default ServerPage;