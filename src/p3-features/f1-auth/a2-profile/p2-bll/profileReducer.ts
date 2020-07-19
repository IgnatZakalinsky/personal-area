import {ProfileActionsType, profileInitialState} from "./ProfileActions";

export const profileReducer = (
    state = profileInitialState,
    action: ProfileActionsType
): typeof profileInitialState => {
    switch (action.type) {
        case "PROFILE/SET_PROFILE": {
            return {
                ...state,
                isAuth: action.test,
            }
        }

        default: {
            return state;
        }
    }
};

