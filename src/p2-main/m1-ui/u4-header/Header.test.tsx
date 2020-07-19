import React from "react";
import {render} from "@testing-library/react";
import Header from "./Header";

test(" find text 'it-incubator'", () => {
    const {getByText} = render(<Header/>);
    const linkElement = getByText(/it-incubator/i);
    expect(linkElement).toBeInTheDocument();
});
