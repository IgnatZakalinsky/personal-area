import {AppStoreType} from "./store";
import {log} from "../../p1-common/c0-debug/debug";
import {Dispatch} from "redux";
import { setBooleanError } from "./booleans/booleanCallbacks";

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

export const tryCatch = async ( // for automatically setting request error
    logic: () => void,
    dispatch: Dispatch,
    BOOLEAN_NAMES: string[],

    info?: string,
) => {
    try {
        await logic();

    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        setBooleanError(dispatch, BOOLEAN_NAMES, error);

        log(info + ' Error! :', {...e})
    }
};
