import React from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";
import './AdminPage.css'

// admin page needs to return list of users
const AdminPage = () => {
    const users = useLoaderData();
    return (
        <div className="AdminPage">
            <h1>
                Admin Page
            </h1>
            <div className="AdminPage-UserCards">
                {users.map(user => <UserCard
                    user={user}
                    key={user.id}
                    state={user.state}
                />)}
            </div>
        </div>
    );
}

export default AdminPage;