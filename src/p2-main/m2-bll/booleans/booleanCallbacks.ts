import {Dispatch} from "redux";
import {BooleanActions} from "./BooleanActions";

// BOOLEAN_NAMES == [loading, error, success]

export const setBooleanLoading = (dispatch: Dispatch, BOOLEAN_NAMES: string[], loading: boolean) => {
    dispatch(BooleanActions.setBooleanValues([
        {name: BOOLEAN_NAMES[0], value: loading},
        {name: BOOLEAN_NAMES[1], value: false, data: undefined},
        {name: BOOLEAN_NAMES[2], value: false}
    ]))
};
export const setBooleanError = (dispatch: Dispatch, BOOLEAN_NAMES: string[], error: any) => {
    dispatch(BooleanActions.setBooleanValues([
        {name: BOOLEAN_NAMES[0], value: false},
        {name: BOOLEAN_NAMES[1], value: true, data: error},
        {name: BOOLEAN_NAMES[2], value: false},
    ]))
};
export const setBooleanSuccess = (dispatch: Dispatch, BOOLEAN_NAMES: string[], success: boolean) => {
    dispatch(BooleanActions.setBooleanValues([
        {name: BOOLEAN_NAMES[0], value: false},
        {name: BOOLEAN_NAMES[1], value: false, data: undefined},
        {name: BOOLEAN_NAMES[2], value: success},
    ]))
};
export const clearBooleans = (dispatch: Dispatch, BOOLEAN_NAMES: string[]) => {
    dispatch(BooleanActions.setBooleanValues([
        {name: BOOLEAN_NAMES[0], value: false},
        {name: BOOLEAN_NAMES[1], value: false, data: undefined},
        {name: BOOLEAN_NAMES[2], value: false},
    ]))
};
