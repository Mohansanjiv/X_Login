import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedInUser, setLoggedInUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Invalid username or password");
            return;
        }

        if (username === "user" && password === "password") {
            setLoggedInUser(username);
            return;
        }

        setError("Invalid username or password");
    };

    if (loggedInUser) {
        return <h2>Welcome, {loggedInUser}</h2>;
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
            <div style={{ marginBottom: "1rem" }}>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </label>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </label>
            </div>

            {error && (
                <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
            )}

            <button type="submit">Login</button>
        </form>
    );
}
