import {InferActionsType} from "../actions";

export type BooleanType = {
    name: string;
    value: boolean;
    data?: any;
}

export const booleanInitialState = {
    booleans: [
        {name: "loading", value: true}
    ] as BooleanType[],
};

export type BooleanActionsType = InferActionsType<typeof BooleanActions>;

export const BooleanActions = {
    setBooleanValues: (booleans: BooleanType[]) => ({
        type: "BOOLEAN/SET_VALUES",
        booleans,
    } as const),

};
