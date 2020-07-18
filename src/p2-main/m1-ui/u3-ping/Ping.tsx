import React, {useEffect, useState} from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {MainAPI} from "../../m3-dal/instance";
import {message} from "antd";

const Ping = React.memo(() => {
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    useEffect(() => {
        if (firstRendering) {
            MainAPI.ping() // for test, wake up back
                .then(data => {
                    log("ping request: ", data);
                    const ping = new Date().getTime() - data.backTime;
                    message.success(`ping front to back = ${data.ping}, back to front = ${ping}`, 5);
                })
                .catch(e => log("ping request error object: ", {...e}));

            setFirstRendering(false);
        } else {

        }
    }, [firstRendering, setFirstRendering]);

    log("2 -- rendering Ping");
    return null
});

export default Ping;
