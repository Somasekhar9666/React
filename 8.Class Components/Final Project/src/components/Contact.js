import React from "react";

const Contact = () => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Contact Us</h1>
            <p>
                Have questions or need support? We’d love to hear from you!
            </p>
            <form style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }} htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        style={{
                            padding: "10px",
                            width: "80%",
                            maxWidth: "400px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }} htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        style={{
                            padding: "10px",
                            width: "80%",
                            maxWidth: "400px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }} htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Enter your message"
                        style={{
                            padding: "10px",
                            width: "80%",
                            maxWidth: "400px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
            <p style={{ marginTop: "20px" }}>
                Or reach out to us directly:
            </p>
            <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    );
};

export default Contact;
