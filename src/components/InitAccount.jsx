
import { Box, Grid, TextField, Typography, Container, Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleFieldChange = (event) => {
        event.preventDefault();
        switch (event.target.id) {
            case 'firstname':
                setFirstName(event.target.value);
                break;
            case 'lastname':
                setLastName(event.target.value);
                break;
            case 'photourl':
                setPhotoURL(event.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const displayName = `${firstName} ${lastName}`
        const success = await updateProfile({ displayName });
        if (success) {
            navigate('/trading')
        }
    };

    return (
        <Box 
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body2">
                            First name
                        </Typography>
                        <TextField 
                            variant="outlined"
                            size="small"
                            id="firstname"
                            onChange={handleFieldChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2">
                            Last name
                        </Typography>
                        <TextField 
                            variant="outlined"
                            size="small"
                            id="lastname"
                            onChange={handleFieldChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            sx={{ 
                                bgcolor: "#000",
                                borderRadius: 10,
                                textTransform: "none",
                                py: 1,
                                ":hover": {
                                    bgcolor: "#9c7a63"
                                }
                            }}
                            onClick={handleSubmit}
                            fullWidth
                        >
                            Sign up
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

const InitAccount = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        user.displayName
            ? navigate("/")
            : <Form />
    )
}

export default InitAccount;