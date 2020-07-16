import {BooleanActionsType, booleanInitialState} from "./BooleanActions";

export const booleanReducer =
    (state = booleanInitialState, action: BooleanActionsType): typeof booleanInitialState => {
        switch (action.type) {
            case "BOOLEAN/SET_VALUES": {
                const newBooleans = state.booleans.map(stateB => {
                    const findB = action.booleans.find(actionB => actionB.name === stateB.name);
                    return findB ? findB : stateB;
                });
                for (const actionB of action.booleans) {
                    if (!newBooleans.find(stateB => stateB.name === actionB.name)) {
                        newBooleans.push(actionB);
                    }
                }

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
