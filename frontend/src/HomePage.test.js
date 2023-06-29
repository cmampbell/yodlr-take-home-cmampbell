import React from "react";
import renderWithRouter from "./renderWithRouter";
import HomePage from "./HomePage";


describe('HomePage tests', () => {
    it('should render without crashing', () => {
        // define a full route as the first argument
        renderWithRouter(<HomePage />)
    })

    it('should match the snapshot', ()=> {
        const { asFragment } = renderWithRouter(<HomePage />)

        expect(asFragment()).toMatchSnapshot();
    })
})