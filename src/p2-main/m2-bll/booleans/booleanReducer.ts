import {BooleanActionsType, booleanInitialState, BooleanType} from "./BooleanActions";

export const booleanReducer = (
    state = booleanInitialState,
    action: BooleanActionsType
): typeof booleanInitialState => {
    switch (action.type) {
        case "BOOLEAN/SET_VALUES": {
            const updatedBooleans = changeBooleans(state.booleans, action.booleans);
            const newBooleans = addBooleans(updatedBooleans, action.booleans);
            return {
                ...state,
                booleans: newBooleans,
            }
        }

        default: {
            return state;
        }
    }
};

export const changeBooleans = (stateBooleans: BooleanType[], actionBooleans: BooleanType[]): BooleanType[] => {
    return stateBooleans.map(stateB => {
        const foundActionB = actionBooleans.find(actionB => actionB.name === stateB.name);

        if (foundActionB && foundActionB.value !== stateB.value) return foundActionB; // change if find in action and different
        else return stateB;
    });
};
export const addBooleans = (updatedBooleans: BooleanType[], actionBooleans: BooleanType[]): BooleanType[] => {
    const newBooleans = [...updatedBooleans];

    for (const actionB of actionBooleans) {
        if (actionB.value && !newBooleans.find(newB => newB.name === actionB.name)) {
            newBooleans.push(actionB); // add if not find in state and not false (default)
        }
    }
    return newBooleans;
};
