import React, { useState, useEffect, useCallback } from "react";

import GetServerStatusAjaxHelper from "../components/helpers/GetServerStatusAjaxHelper";
import StopServerAjaxHelper from "../components/helpers/StopServerAjaxHelper";
import StartServerAjaxHelper from "../components/helpers/StartServerAjaxHelper";
import ToastHelper from "../components/helpers/ToastHelper";
import * as ServerStatus from "../components/helpers/ServerStatus";
import Server from "../components/Server/Server";

const ServerPage = ({ apiKey }) => {
    const [serverStatus, setServerStatus] = useState(ServerStatus.PENDING);

    const startServer = async() => {
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

    const stopServer = async() => {
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

    const getServerStatus = useCallback(async () => {
        setServerStatus(ServerStatus.PENDING);

        await GetServerStatusAjaxHelper.get(apiKey)
            .then((response) => {
                if (response.status === ServerStatus.RUNNING) {
                    setServerStatus(ServerStatus.RUNNING);
                }
                if (response.status === ServerStatus.STOPPED) {
                    setServerStatus(ServerStatus.STOPPED);
                }
                if (response.status === ServerStatus.PENDING) {
                    setServerStatus(ServerStatus.PENDING);
                    getServerStatus();
                }
            }).catch(() => {
                setServerStatus(ServerStatus.ERROR);
                ToastHelper.displayErrorMessage("Couldn't check server status.");
            });
    }, [apiKey, setServerStatus]);

    useEffect(() => {
        getServerStatus();
    }, [setServerStatus]);

    return <Server serverStatus={serverStatus} getServerStatus={getServerStatus} startServer={startServer} stopServer={stopServer} />;
};

export default ServerPage;