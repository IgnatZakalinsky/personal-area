import {IS_DEVELOPER_VERSION} from "../../p0-config/config";
import React from "react";

export const log = (...args: any[]) => {
    if (IS_DEVELOPER_VERSION) console.log(...args);
};

log(`
!!! if component have useSomeHook
 - rendering log() 2 times
rendering <Log/> 1 times always

`);

const Log: React.FC<{ s: string }> = ({s}) => {
    log(s);
    return null
};

export default Log;
