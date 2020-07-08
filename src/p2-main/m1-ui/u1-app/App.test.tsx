import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test(" find text 'it-incubator'", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/it-incubator/i);
  expect(linkElement).toBeInTheDocument();
});
