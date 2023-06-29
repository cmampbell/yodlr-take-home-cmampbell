import React from "react";
import { Card, CardBody, CardText, CardHeader } from 'reactstrap'
import './UserCard.css'

const UserCard = ({ user }) => {
    const { firstName, lastName, email, state } = user

    return (
        <Card color="light" outline >
            <CardBody>
                <CardHeader className={state}>
                    {firstName} {lastName}
                </CardHeader>
                <CardText>
                    Email: {email}
                </CardText>
                <CardText>
                    State: {state.charAt(0).toUpperCase() + state.slice(1)}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default UserCard;