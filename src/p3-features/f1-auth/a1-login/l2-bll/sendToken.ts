import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../p2-main/m2-bll/thunks";
import {AppStoreType} from "../../../../p2-main/m2-bll/store";
import {BooleanActionsType} from "../../../../p2-main/m2-bll/booleans/BooleanActions";
import {ThunkAction} from "redux-thunk";
import {setBooleanLoading, setBooleanSuccess} from "../../../../p2-main/m2-bll/booleans/booleanCallbacks";
import {log} from "../../../../p1-common/c0-debug/debug";
import {LoginAPI} from "../l3-dal/LoginAPI";
import {LOGIN_BOOLEAN_NAMES} from "../l1-ui/LoginForm/LoginFormContainer";

export const sendTokenTC =
    (token: string)
        : ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, BooleanActionsType> =>
        async (
            dispatch,
            // getStore
        ) => {
            setBooleanLoading(dispatch, LOGIN_BOOLEAN_NAMES, true);

            await tryCatch(
                async () => {
                    const pingData = await LoginAPI.ping(); // for test, !!! need transfer to main
                    const data = await LoginAPI.login(token);

                    setBooleanSuccess(dispatch, LOGIN_BOOLEAN_NAMES, true);
                    // dispatch(ProfileActions.setUser(data));

                    log('Login with token Success!', pingData, data)
                },
                dispatch,
                LOGIN_BOOLEAN_NAMES,
                "Login with token"
            );
        };
