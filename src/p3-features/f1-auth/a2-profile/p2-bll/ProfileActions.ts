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
    setProfile: (test: boolean) => ({
        type: "PROFILE/SET_PROFILE",
        test,
    } as const),

};
