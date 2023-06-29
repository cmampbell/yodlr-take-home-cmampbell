import React from "react";
import renderWithRouter from "./renderWithRouter";
import UserCard from "./UserCard";

const testUser = {firstName: 'bilbo', lastName: 'baggins', email: 'thehobbit@middleearth.com', state: 'active'}
describe('NavBar tests', () => {

    it('should render without crashing', () => {
        // define a full route as the first argument
        renderWithRouter(<UserCard user={testUser}/>)
    })

    it('should match the snapshot', ()=> {
        const { asFragment } = renderWithRouter(<UserCard user={testUser}/>)

        expect(asFragment()).toMatchSnapshot();
    })
})