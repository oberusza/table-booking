import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./Reservation.js";

describe("Reservation", () => {
  it("calls setStep(2) when all required fields are filled and agreed is checked", () => {
    const onSuccess = jest.fn();
    render(<Reservation onSuccess={onSuccess} />);

    const nameInput = screen.getByLabelText("Name:");
    const dateInput = screen.getByLabelText("Date:");
    const timeInput = screen.getByLabelText("Time:");
    const guestsInput = screen.getByLabelText("Number of guests:");
    const emailInput = screen.getByLabelText("Email address:");
    const phoneInput = screen.getByLabelText("Phone number:");
    const agreedCheckbox = screen.getByLabelText(
      "By checking this box, you are agreeing to our terms of service"
    );

    fireEvent.change(nameInput, { target: { value: "Peter McKinley" } });
    fireEvent.change(dateInput, { target: { value: "2023-04-22" } });
    fireEvent.change(timeInput, { target: { value: "12:22" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(emailInput, {
      target: { value: "peter.mckinley@fakemail.com" },
    });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.click(agreedCheckbox);

    const reserveButton = screen.getByText("RESERVE");
    fireEvent.click(reserveButton);

    expect(screen.getByText("Reservation 2/3")).toBeInTheDocument();
  });

  it("Shows an alert when not all required fields are filled", () => {
    const onSuccess = jest.fn();
    render(<Reservation onSuccess={onSuccess} />);

    const reserveButton = screen.getByText("RESERVE");
    fireEvent.click(reserveButton);

    expect(
      screen.getByText(
        "Please fill in all required fields and accept the terms of service."
      )
    ).toBeInTheDocument();
  });
});
