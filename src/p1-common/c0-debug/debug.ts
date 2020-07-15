import {isDeveloperVersion} from "../../p0-config/config";

export const log = (...args: any[]) => {
    if (isDeveloperVersion) console.log(...args);
};
