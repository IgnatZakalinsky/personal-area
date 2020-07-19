import { BooleanType } from "./BooleanActions";
import {changeBooleans} from "./booleanReducer";

let initialState: BooleanType[];

beforeEach(() => {
    initialState = [
        {name: "1", value: false},
        {name: "2", value: true},
        {name: "3", value: true},
    ]
});

test("change none boolean", () => {
    const newState = changeBooleans(initialState, []);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("change boolean 1 to true", () => {
    const actionState: BooleanType[] = [
        {name: "1", value: true},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(true);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("change boolean 2 to false", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: false},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(false);
    expect(newState[2].value).toBe(true);
});
test("change boolean 3 to false", () => {
    const actionState: BooleanType[] = [
        {name: "3", value: false},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(false);
});
test("change boolean 2 to true, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: true},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[1]).toBe(initialState[1]);
    expect(newState[2].value).toBe(true);
});
test("change boolean 4 to true, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "4", value: true},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});
test("change boolean 4 and 5 to true, without changes", () => {
    const actionState: BooleanType[] = [
        {name: "4", value: true},
        {name: "5", value: true},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(true);
});

test("change boolean 1 and 3 to true and false", () => {
    const actionState: BooleanType[] = [
        {name: "1", value: true},
        {name: "3", value: false},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(true);
    expect(newState[1].value).toBe(true);
    expect(newState[2].value).toBe(false);
});
test("change boolean 2 and 4 to false", () => {
    const actionState: BooleanType[] = [
        {name: "2", value: false},
        {name: "4", value: false},
    ];
    const newState = changeBooleans(initialState, actionState);
    expect(newState[0].value).toBe(false);
    expect(newState[1].value).toBe(false);
    expect(newState[2].value).toBe(true);
});
