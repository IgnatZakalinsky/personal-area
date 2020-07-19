import {pathHelper} from "./pathHelper";

// let initialState: BooleanType[];
//
// beforeEach(() => {
//     initialState = [
//         {name: "1", value: false},
//         {name: "2", value: true},
//         {name: "3", value: true},
//     ]
// });

test("path /", () => {
    const path = pathHelper("/");
    expect(path).toBe("/");
});
test("path /xxx", () => {
    const path = pathHelper("/xxx");
    expect(path).toBe("/xxx");
});
test("path []", () => {
    const path = pathHelper([]);
    expect(path).toBe("/not-correct-path");
});
test("path ['/']", () => {
    const path = pathHelper(["/"]);
    expect(path).toBe("/");
});
test("path ['/xxx']", () => {
    const path = pathHelper(["/xxx"]);
    expect(path).toBe("/xxx");
});
test("path ['/xxx', '/yyy']", () => {
    const path = pathHelper(["/xxx", "/yyy"]);
    expect(path).toBe("/xxx");
});
test("path ()", () => {
    const path = pathHelper();
    expect(path).toBe("/error404");
});
test("path undefined", () => {
    const path = pathHelper(undefined);
    expect(path).toBe("/error404");
});
