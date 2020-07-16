import {useSelector} from "react-redux";
import {AppStoreType} from "../store";
import {BooleanType} from "./BooleanActions";

export const selectBooleans = (store: AppStoreType, names: string[]): BooleanType[] => {
    const result: BooleanType[] = [];
    for (const n of names) {
        result.push(store.booleans.booleans.find(b => b.name === n) || {name: n, value: false, data: {}});
    }
    return result;
};

export const useBooleanSelector = (names: string[]): BooleanType[] => {
    return useSelector((store: AppStoreType) => selectBooleans(store, names));
};
