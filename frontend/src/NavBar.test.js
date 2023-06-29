import React from "react";
import renderWithRouter from "./renderWithRouter";
import NavBar from "./NavBar";


describe('NavBar tests', () => {
    it('should render without crashing', () => {
        // define a full route as the first argument
        renderWithRouter(<NavBar />)
    })

    it('should match the snapshot', ()=> {
        const { asFragment } = renderWithRouter(<NavBar />)

        expect(asFragment()).toMatchSnapshot();
    })
})