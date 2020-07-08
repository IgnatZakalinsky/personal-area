import {isDeveloperVersion} from "../../p0-config/config";

export const log = (value: string) => {
    if (isDeveloperVersion) console.log(value);
};
