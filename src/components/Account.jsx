import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, logout } from "../firebase";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);

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
            navigate('/')
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center"
            }}
        >
            <Typography 
                variant="h3"
                sx={{
                    textAlign: "center",
                    mt: 4
                }}
            >
                Update Your Account
            </Typography>

            <Container 
                maxWidth="sm"
                sx={{
                    mt: 2
                }}
            >
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
                            Update Profile
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Account;