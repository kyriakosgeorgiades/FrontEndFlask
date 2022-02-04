import React from "react";
import Home from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from 'react-router-dom';

test("header renders with correct text", () => {
    const { getByTestId } = render(
        <Router>
            <Home />
        </Router>
    );
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Welcome to C-Rentals, get your dream car now!");
});