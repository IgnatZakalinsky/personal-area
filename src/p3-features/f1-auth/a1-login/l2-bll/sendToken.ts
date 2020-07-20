import {ExtraArgument, ReturnVoid, tryCatch} from "../../../../p2-main/m2-bll/thunks";
import {AppStoreType} from "../../../../p2-main/m2-bll/store";
import {BooleanActionsType} from "../../../../p2-main/m2-bll/booleans/BooleanActions";
import {ThunkAction} from "redux-thunk";
import {setBooleanLoading, setBooleanSuccess} from "../../../../p2-main/m2-bll/booleans/booleanCallbacks";
import {log} from "../../../../p1-common/c0-debug/debug";
import {LoginAPI} from "../l3-dal/LoginAPI";
import {LOGIN_BOOLEAN_NAMES} from "../l1-ui/LoginForm/LoginFormContainer";
import {ProfileActions, ProfileActionsType} from "../../a2-profile/p2-bll/ProfileActions";

type SendTokenActionsType = BooleanActionsType | ProfileActionsType;

export const sendTokenTC = (
    token: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgument, SendTokenActionsType> => async (
    dispatch,
    // getStore
) => {
    setBooleanLoading(dispatch, LOGIN_BOOLEAN_NAMES);

    await tryCatch(
        async () => {
            const data = await LoginAPI.login(token);

            log('Login with token Success!', data);
            setBooleanSuccess(dispatch, LOGIN_BOOLEAN_NAMES);
            dispatch(ProfileActions.setProfile(true));
        },
        dispatch,
        LOGIN_BOOLEAN_NAMES,
        "Login with token"
    );
};
