import React from "react";
import Home from "../index";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from 'react-router-dom';

test("header renders with correct text", () => {
    const { getByTestId } = render(
        <Router>
            <Home />
        </Router>
    );
    const headerEl = getByTestId("header");
    const findCarBtn = getByTestId("find-car-btn");

    expect(headerEl.textContent).toBe("Welcome to C-Rentals, get your dream car now!");

    // Click button
    // fireEvent.click(findCarBtn);
    
    // const headerTitle = getByTestId("header-title");
    // expect(headerTitle.textContent).toBe("Find Car");
});