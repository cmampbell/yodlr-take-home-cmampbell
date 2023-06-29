import React from "react";
import renderWithRouter from "./renderWithRouter";
import SignupForm from "./SignupForm";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils";

const user = userEvent.setup()

describe('SignupForm tests', () => {
    it('should render without crashing', () => {
        // define a full route as the first argument
        renderWithRouter(<SignupForm />)
    })

    it('should match the snapshot', ()=> {
        const { asFragment } = renderWithRouter(<SignupForm />)

        expect(asFragment()).toMatchSnapshot();
    })

    it('should handle user input', async () => {
        renderWithRouter(<SignupForm />)

        await act(async ()=> {
            await user.type(screen.getByLabelText("First Name"), 'test');
            await user.type(screen.getByLabelText("Last Name"), 'test');
            await user.type(screen.getByLabelText("Email"), 'test@email.com');
            await user.click(screen.getByText("Sign Up!"))
        })


        expect(fetch).toHaveBeenCalled();
        expect(fetch).toHaveBeenCalledWith(`http://localhost:3001/users`, {
            method: "POST",
            mode: "cors",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                firstName: 'test',
                lastName: 'test',
                email: 'test@email.com'
            })
        });
        
    })
})