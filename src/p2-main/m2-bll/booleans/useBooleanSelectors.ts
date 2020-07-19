import {useSelector} from "react-redux";
import {AppStoreType} from "../store";
import {BooleanType} from "./BooleanActions";
import {useState} from "react";
// import {createSelector} from "reselect";
// import {log} from "../../../p1-common/c0-debug/debug";

// select booleans from all booleans
export const selectBooleans = (booleans: BooleanType[], names: string[]): BooleanType[] => {
    const result: BooleanType[] = [];
    for (const n of names) {
        result.push(
            booleans.find(b => b.name === n)
            || {name: n, value: false} // if not find
        );
    }
    return result;
};

export const useBooleanSelector = (names: string[]): BooleanType[] => { // find boolean values with names
    return useSelector((store: AppStoreType) => selectBooleans(store.booleans.booleans, names));
};

// memo for loading, error, success
export const useMemoBooleanSelector = (names: [string, string, string]) => {
    const [loading, setLoading] = useState<BooleanType>({name: names[0], value: false});
    const [error, setError] = useState<BooleanType>({name: names[1], value: false});
    const [success, setSuccess] = useState<BooleanType>({name: names[2], value: false});

    // + 1 save rerender, not rerender children with props and callback with loading, error, success
    const [newLoading, newError, newSuccess] = useBooleanSelector(names);

    const result = [loading, error, success];
    if (newLoading.value !== loading.value) {
        result[0] = newLoading;
        setLoading(newLoading);
    }
    if (newError.value !== error.value) {
        result[1] = newError;
        setError(newError);
    }
    if (newSuccess.value !== success.value) {
        result[2] = newSuccess;
        setSuccess(newSuccess);
    }

    return result;
};

// reselect, not completed, useMemoBooleanSelector simplest
// const selectBooleansFromStore = (store: AppStoreType, names: string[]) => store.booleans.booleans;
// const memoSelectBooleansFromStore = createSelector(
//     selectBooleansFromStore,
//     (booleans: BooleanType[]) => booleans
// );
//
// const selectNames = (store: AppStoreType, names: string[]) => names;
// const memoSelectNames = createSelector(
//     selectNames,
//     (names: string[]) => names
// );
//
// const memoSelectBooleans = createSelector(
//     [memoSelectBooleansFromStore, memoSelectNames],
//     (booleans: BooleanType[], names: string[]) => {
//         log("reselect ", names);
//         return selectBooleans(booleans, names)
//     }
// );
//
// export const useBooleanSelector = (names: string[]): BooleanType[] => {
//     return useSelector((store: AppStoreType) => {
//         return memoSelectBooleans(store, names)
//     });
// };
