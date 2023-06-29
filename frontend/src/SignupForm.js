import React, { useState } from "react";
import { Form, useNavigate } from 'react-router-dom'
import { Input, FormGroup, Label, Button } from 'reactstrap'
import './SignupForm.css'

const SignupForm = () => {
    const navigate = useNavigate()

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(() => ({
            ...formData, [name]: value
        }
        ))
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // TO-DO add form validation
        // users can't submit blank forms
        await fetch(`http://localhost:3001/users`, {
            method: "POST",
            mode: "cors",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        })
        navigate('/')
    }

    return (
        <section className="SignUpForm-div">
            <h1>Sign up for Yodlr!</h1>
            <Form onSubmit={handleSubmit} className="SignUpForm">
                <FormGroup floating>
                <Input
                    placeholder='first name'
                    name="firstName"
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Label htmlFor='firstName' className="label">First Name</Label>

                </FormGroup>
                <FormGroup floating>
                <Input
                    placeholder='last name'
                    name="lastName"
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <Label htmlFor='lastName'>Last Name</Label>

                </FormGroup>
                <FormGroup floating>
                <Input
                    placeholder='email'
                    name="email"
                    id="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Label htmlFor='email'>Email</Label>

                </FormGroup>
                <Button type="submit">Sign Up!</Button>
            </Form>
        </section>
    )
}

export default SignupForm;