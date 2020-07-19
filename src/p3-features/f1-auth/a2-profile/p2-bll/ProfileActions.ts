import {InferActionsType} from "../../../../p2-main/m2-bll/actions";


export type ProfileType = {
    _id: string

}

export const profileInitialState = {
    profile: undefined as ProfileType | undefined,
    isAuth: false
};

export type ProfileActionsType = InferActionsType<typeof ProfileActions>;

export const ProfileActions = {
    // setBooleanValues: (booleans: BooleanType[]) => ({
    //     type: "BOOLEAN/SET_VALUES",
    //     booleans,
    // } as const),

};
