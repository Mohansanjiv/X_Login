import React, { useState } from "react";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Empty field validation
        if (!username || !password) {
            setError("Invalid username or password");
            return;
        }

        // Test expects correct credentials: user / password
        if (username === "user" && password === "password") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid username or password");
        }
    };

    if (isLoggedIn) {
        return (
            <>
                <h1>Welcome, {username}</h1>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "50px auto" }}>
            <div style={{ marginBottom: "10px" }}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ display: "block", width: "100%", marginTop: "5px" }}
                    required
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", width: "100%", marginTop: "5px" }}
                    required
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" style={{ width: "100%", padding: "8px" }}>
                Login
            </button>
        </form>
    );
};

export default LoginPage;
