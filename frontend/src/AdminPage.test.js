import React from "react";
import renderWithRouter from "./renderWithRouter";
import AdminPage from "./AdminPage";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLoaderData: () => (
        [{ "id": 1, "email": "kyle@getyodlr.com", "firstName": "Kyle", "lastName": "White", "state": "active" },
        { "id": 2, "email": "jane@getyodlr.com", "firstName": "Jane", "lastName": "Stone", "state": "active" }]
    )
}));

describe('AdminPage tests', () => {
    it('should render without crashing', () => {
        // define a full route as the first argument
        renderWithRouter(<AdminPage />)
    })

    it('should match the snapshot', () => {
        const { asFragment } = renderWithRouter(<AdminPage />)

        expect(asFragment()).toMatchSnapshot();
    })
})