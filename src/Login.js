import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper
} from "@mui/material";

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
                maxWidth: 320,
                mx: "auto",
                mt: 8,
                p: 4,
                borderRadius: 3
            }}
        >
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                        inputProps={{ "data-testid": "username-input" }}
                    />
                </label>

                <label>
                    Password
                    <TextField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        inputProps={{ "data-testid": "password-input" }}
                    />
                </label>

                {error && (
                    <Typography color="error" mt={1}>
                        {error}
                    </Typography>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>
        </Paper>
    );
}
