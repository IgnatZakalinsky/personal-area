import {useSelector} from "react-redux";
import {AppStoreType} from "../store";
import {BooleanType} from "./BooleanActions";

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
