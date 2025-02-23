import React from "react";
const Error = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">Oops! Something went wrong.</h1>
                <p className="error-message">
                    The page you're looking for doesn't exist or an error occurred while navigating.
                </p>
                <a href="/" className="error-home-link">
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default Error;
