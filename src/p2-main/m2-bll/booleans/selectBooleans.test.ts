import {selectBooleans} from "./useBooleanSelectors";
import { BooleanType } from "./BooleanActions";

let initialState: BooleanType[];

beforeEach(() => {
    initialState = [
        {name: "1", value: false},
        {name: "2", value: true},
        {name: "3", value: true},
    ]
});

test("find none boolean", () => {
    const selectedBooleans = selectBooleans(initialState, []);
    expect(selectedBooleans.length).toBe(0);
});
test("find boolean 1", () => {
    const selectedBooleans = selectBooleans(initialState, ["1"]);
    expect(selectedBooleans[0].name).toBe("1");
    expect(selectedBooleans[0].value).toBe(false);
});
test("find boolean 4", () => {
    const selectedBooleans = selectBooleans(initialState, ["4"]);
    expect(selectedBooleans[0].name).toBe("4");
    expect(selectedBooleans[0].value).toBe(false);
});
test("find boolean 2", () => {
    const selectedBooleans = selectBooleans(initialState, ["2"]);
    expect(selectedBooleans[0].name).toBe("2");
    expect(selectedBooleans[0].value).toBe(true);
});
test("find boolean 3 and 2", () => {
    const selectedBooleans = selectBooleans(initialState, ["3", "2"]);
    expect(selectedBooleans[0].name).toBe("3");
    expect(selectedBooleans[1].name).toBe("2");
    expect(selectedBooleans[0].value && selectedBooleans[1].value).toBe(true);
});
test("find boolean 1 and 4", () => {
    const selectedBooleans = selectBooleans(initialState, ["1", "4"]);
    expect(selectedBooleans[0].name).toBe("1");
    expect(selectedBooleans[1].name).toBe("4");
    expect(selectedBooleans[0].value && selectedBooleans[1].value).toBe(false);
});
test("find boolean 7 and 6", () => {
    const selectedBooleans = selectBooleans(initialState, ["7", "6"]);
    expect(selectedBooleans[0].name).toBe("7");
    expect(selectedBooleans[1].name).toBe("6");
    expect(selectedBooleans[0].value && selectedBooleans[1].value).toBe(false);
});
test("find boolean 2 and 6", () => {
    const selectedBooleans = selectBooleans(initialState, ["2", "6"]);
    expect(selectedBooleans[0].name).toBe("2");
    expect(selectedBooleans[1].name).toBe("6");
    expect(selectedBooleans[0].value).toBe(true);
    expect(selectedBooleans[1].value).toBe(false);
});
