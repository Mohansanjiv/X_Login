import { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedInUser, setLoggedInUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validation
        if (!username || !password) {
            setError("Invalid username or password");
            return;
        }

        // Hard-coded credentials
        if (username === "user" && password === "password") {
            setLoggedInUser(username);
            return;
        }

        setError("Invalid username or password");
    };

    // Show welcome screen after login
    if (loggedInUser) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h4">Welcome, {loggedInUser}</Typography>
            </Box>
        );
    }

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: 360,
                mx: "auto",
                mt: 8,
                p: 4,
                borderRadius: 3,
            }}
        >
            <Typography variant="h5" mb={3} textAlign="center">
                Login
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <label>
                        Username
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                            required
                        />
                    </label>
                </Box>

                <Box mb={2}>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                            required
                        />
                    </label>
                </Box>

                {error && (
                    <Typography color="error" mb={2}>
                        {error}
                    </Typography>
                )}

                <Button type="submit" variant="contained" fullWidth>
                    Submit
                </Button>
            </form>
        </Paper>
    );
}
