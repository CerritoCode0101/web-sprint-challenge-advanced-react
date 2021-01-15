import React from "react";
import { screen , render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const utils = render(<CheckoutForm />);
    const firstNameInput = screen.getByPlaceholderText(/firstName/i);
    const lastNameInput = screen.getByPlaceholderText(/lastName/i);
    const addressInput = screen.getByPlaceholderText(/address/i);
    const cityInput = screen.getByPlaceholderText(/city/i);
    const stateInput = screen.getByPlaceholderText(/state/i);
    const zipInput = screen.getByPlaceholderText(/zip/i);

    userEvent.type(firstNameInput, 'casey');
    userEvent.type(lastNameInput, 'cerrito');
    userEvent.type(addressInput, 'address');
    userEvent.type(cityInput, 'detroit');
    userEvent.type(stateInput, 'Michigan' );
    userEvent.type(zipInput, '48446' );

    expect(firstNameInput.value).toBe('casey');
    expect(lastNameInput.value).toBe('cerrito');
    expect(addressInput.value).toBe('address');
    expect(cityInput.value).toBe('detroit');
    expect(stateInput.value).toBe('Michigan');
    expect(zipInput.value).toBe('48446');

});
