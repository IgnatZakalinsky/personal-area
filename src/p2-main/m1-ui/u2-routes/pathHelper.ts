export const pathHelper = (path?: string | string[]): string => {
    let linkPath: string;
    if (path)
        if (typeof path === "object" && path.length) linkPath = path[0]; // if path: string[] and path.length > 0
        else linkPath = typeof path === "string"
            ? path // if path: string
            : "/not-correct-path"; // if path: []
    else linkPath = "/error404"; // if path undefined
    return linkPath
};
