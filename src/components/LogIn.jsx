import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import signinImage from "../assets/signin-image-pro.jpg";
import Image from "mui-image";

const LogIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleFieldChange = (event) => {
        event.preventDefault();
        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        logInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (user) navigate("/trading")
    }, [user, navigate])

    return (
        <Box>
            <CssBaseline />
            <Grid container spacing={0} sx={{ height: "100vh", overflow: "hidden" }}>
                <Grid 
                    item 
                    sm={6}
                >
                    <Image 
                        src={signinImage}
                        duration={2000}
                        shift="top"
                    />
                </Grid>

                <Grid item sm={6}>
                    <Container maxWidth="sm">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: "100vh"
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Fade left distance="20px" delay={800}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                mb: 2
                                            }}
                                        >
                                            Start trading now
                                        </Typography>
                                    </Fade>
                                </Grid>

                                <Grid item xs={10}>
                                    <Fade left distance="20px" delay={1000}>
                                        <Typography variant="body2">
                                            Email
                                        </Typography>
                                        <TextField 
                                            variant="outlined"
                                            size="small"
                                            id="email"
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Fade>
                                </Grid>

                                <Grid item xs={10}>
                                    <Fade left distance="20px" delay={1000}>
                                        <Typography variant="body2">
                                            Password
                                        </Typography>
                                        <TextField 
                                            variant="outlined"
                                            size="small"
                                            id="password"
                                            type="password"
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Fade>
                                </Grid>

                                <Grid item xs={12}>
                                    <Fade left distance="20px" delay={1200}>
                                        <FormControlLabel 
                                            control={
                                                <Checkbox 
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: '#9c7a63',
                                                        },
                                                    }}
                                                />
                                            }
                                            label="Remember me"
                                        />
                                    </Fade>
                                </Grid>

                                <Grid item xs={4}>
                                    <Fade left distance="20px" delay={1200}>
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
                                            Log in
                                        </Button>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12}>
                                    <Fade left distance="20px" delay={1400}>
                                        <Typography
                                            variant="body1"
                                        >
                                        Not on our site yet? {" "}
                                            <Link 
                                                href="/signup"
                                                underline="always"
                                                sx={{
                                                    color: "inherit",
                                                }}
                                            >
                                                Create an account
                                            </Link>
                                        </Typography>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LogIn;