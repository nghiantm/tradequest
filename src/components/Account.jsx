import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { auth, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    })

    return (
        <Box>
            <Button
                onClick={logout}
            >
                Sign Out
            </Button>
        </Box>
    )
}

export default Account;