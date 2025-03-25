import '../assets/css/Contact.css';

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle blur event to check if fields are empty
    const handleBlur = (e) => {
        const { name, value } = e.target;

        // Set error message if the field is empty
        if (!value) {
            setErrors({
                ...errors,
                [name]: "This field is required"
            });
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Check if the fields are empty
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";

        // Validate email format
        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // If there are any errors, set them and don't submit the form
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted!", formData);
            alert("Message sent successfully!");

            // Optionally, clear the form
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-form-container">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur} // Trigger validation on blur
                    />
                    {errors.name && <p className="error">{errors.name}</p>} {/* Display error */}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur} // Trigger validation on blur
                    />
                    {errors.email && <p className="error">{errors.email}</p>} {/* Display error */}
                </div>

                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur} // Trigger validation on blur
                    />
                    {errors.message && <p className="error">{errors.message}</p>} {/* Display error */}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}