import {ProfileActionsType, profileInitialState} from "./ProfileActions";

export const profileReducer = (
    state = profileInitialState,
    action: ProfileActionsType
): typeof profileInitialState => {
    switch (action.type) {
        // case "BOOLEAN/SET_VALUES": {
        //
        // }

        default: {
            return state;
        }
    }
};

