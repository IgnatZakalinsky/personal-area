import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../p2-main/m2-bll/thunks";
import {AppStoreType} from "../../../../p2-main/m2-bll/store";
import {BooleanActionsType} from "../../../../p2-main/m2-bll/booleans/BooleanActions";
import {ThunkAction} from "redux-thunk";
import {setBooleanLoading, setBooleanSuccess} from "../../../../p2-main/m2-bll/booleans/booleanCallbacks";
import {log} from "../../../../p1-common/c0-debug/debug";

export const sendTokenTC =
    (token: string, BOOLEAN_NAMES: string[])
        : ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, BooleanActionsType> =>
        async (
            dispatch,
            getStore
        ) => {
            setBooleanLoading(dispatch, BOOLEAN_NAMES, true);

            await tryCatch(
                async () => {
                    const data = await new Promise(
                        (res, rej) => setTimeout(() => {
                            if (token.charAt(0) === "0") rej({message: "test error"});
                            else res("ok")
                        }, 3000)
                    );
                        setBooleanSuccess(dispatch, BOOLEAN_NAMES, true);
                        // dispatch(ProfileActions.setUser(data));

                        log('Login with token Success!', data)

                },
                dispatch,
                BOOLEAN_NAMES,
                "Login with token"
            );
        };
