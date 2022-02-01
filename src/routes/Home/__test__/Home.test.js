import React from "react";
import Home from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
    const { getByTestId } = render(<Home />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Welcome to C-Rentals, get your dream car now!");
});