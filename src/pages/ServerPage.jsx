import React, { useState, useEffect, useRef } from "react";

import GetServerStatusAjaxHelper from "../components/helpers/GetServerStatusAjaxHelper";
import ToastHelper from "../components/helpers/ToastHelper";
import * as ServerStatus from "../components/helpers/ServerStatus";
import Server from "../components/Server/Server";

const ServerPage = ({ apiKey }) => {
    const [serverStatus, setServerStatus] = useState(ServerStatus.PENDING);
    const [apiRetryAttempts, setApiRetryAttempts] = useState(1);
    const timer = useRef(null);

    useEffect(() => {
        const getServerStatus = async () => {
            await GetServerStatusAjaxHelper.get(apiKey)
                .then((response) => {
                    if (response.running) {
                        setServerStatus(ServerStatus.RUNNING);
                    }
                    if (!response.running) {
                        setServerStatus(ServerStatus.STOPPED);
                    }
                    if (response.running === null || response.running === undefined) {
                        setServerStatus(ServerStatus.PENDING);
                    }
                }).catch(() => {
                    setApiRetryAttempts(apiRetryAttempts + 1);
                    setServerStatus(ServerStatus.ERROR);
                    ToastHelper.displayErrorMessage("Couldn't check server status.");
                });
        };

        if (apiRetryAttempts > 4) {
            clearInterval(timer.current);
        }
        else {
            timer.current = setInterval(async () => await getServerStatus(), 10000);
        }

        getServerStatus();

        return () => {
            clearInterval(timer.current);
        };
    }, [setServerStatus, apiKey, setApiRetryAttempts, apiRetryAttempts]);

    return <Server serverStatus={serverStatus} />;
};

export default ServerPage;