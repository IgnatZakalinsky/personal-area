import React, {useEffect, useState} from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {MainAPI} from "../../m3-dal/instance";
import {notification} from "antd";

const Ping: React.FC<{show?: boolean}> = React.memo(({show}) => {
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    useEffect(() => {
        if (firstRendering) {
            MainAPI.ping() // for test, wake up back
                .then(data => {
                    log("ping request: ", data);
                    const ping = new Date().getTime() - data.backTime;
                    show && notification.info({
                        message: (
                            <>
                                <div>ping: front to back = {data.ping},</div>
                                <div>back to front = {ping}</div>
                            </>
                        ),
                        placement: "bottomLeft",
                    });
                    MainAPI.ping() // for test, wake up back
                        .then(data => {
                            log("ping request: ", data);
                            const ping = new Date().getTime() - data.backTime;
                            show && notification.info({
                                message: (
                                    <>
                                        <div>ping: front to back = {data.ping},</div>
                                        <div>back to front = {ping}</div>
                                    </>
                                ),
                                placement: "bottomLeft",
                            });

                        })
                        .catch(e => log("ping request error object: ", {...e}));
                })
                .catch(e => log("ping request error object: ", {...e}));

            setFirstRendering(false);
        } else {

        }
    }, [firstRendering, setFirstRendering, show]);

    log("0 rendering Ping");
    return null
});

export default Ping;
