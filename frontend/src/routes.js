import App from "./App";
import SignupForm from "./SignupForm";
import AdminPage from "./AdminPage";
import HomePage from "./HomePage"

const baseURL = 'http://localhost:3001'

const routes = [
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/signup',
                element: <SignupForm/>,
            },
            {
                path: '/admin',
                element: <AdminPage />,
                loader: async () => {
                    return await fetch(`${baseURL}/users`);
                }
            }
        ]
    }
];

export default routes;