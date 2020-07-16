import { BooleanType } from "./BooleanActions";
import {addBooleans} from "./booleanReducer";

let initialState: BooleanType[];

beforeEach(() => {
    initialState = [
        {name: "1", value: false},
        {name: "2", value: true},
        {name: "3", value: true},
    ]
});

test("add none boolean", () => {
    const newState = addBooleans(initialState, []);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("add boolean 4 with true", () => {
    const actionState: BooleanType[] = [
        {name: "4", value: true},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
    expect(newState[3].value).toBe(true); // added
});
test("add boolean 0 with false", () => {
    const actionState: BooleanType[] = [
        {name: "0", value: false},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
    expect(newState[3].value).toBe(false); // added
});
test("add boolean 2 with true, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: true},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("add boolean 2 with false, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: false},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("add boolean 2 and 3 with false, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: false},
        {name: "3", value: false},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});

test("add boolean 4 and 5 with true", () => {
    const actionState: BooleanType[] = [
        {name: "4", value: true},
        {name: "5", value: true},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
    expect(newState[3].value).toBe(true); // added
    expect(newState[4].value).toBe(true); // added
});

test("add boolean 6 and 7 with false and true", () => {
    const actionState: BooleanType[] = [
        {name: "6", value: false},
        {name: "7", value: true},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
    expect(newState[3].value).toBe(false); // added
    expect(newState[4].value).toBe(true); // added
});
test("add boolean 2 and 4 with false", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: false},
        {name: "4", value: false},
    ];
    const newState = addBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
    expect(newState[3].value).toBe(false); // added
});
