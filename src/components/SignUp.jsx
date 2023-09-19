import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

import signupImage from "../assets/signup-image-pro.jpg";

const SignUp = () => {
    return (
        <Box component="form">
            <CssBaseline />
            <Grid container spacing={0} sx={{ height: "100vh" }}>
                <Grid 
                    item 
                    sm={6} 
                    sx={{ 
                        backgroundImage: `url(${signupImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                > 
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
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            mb: 2
                                        }}
                                    >
                                        Sign up for TradeQuest
                                    </Typography>
                                </Grid>

                                <Grid item xs={10}>
                                    <Typography variant="body2">
                                        Username
                                    </Typography>
                                    <TextField 
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    <Typography variant="body2">
                                        Email
                                    </Typography>
                                    <TextField 
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    <Typography variant="body2">
                                        Password
                                    </Typography>
                                    <TextField 
                                        variant="outlined"
                                        size="small"
                                        type="password"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <Button
                                        type='submit'
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
                                        fullWidth
                                    >
                                        Sign up
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography
                                        variant="body1"
                                        sx={{}}
                                    >
                                        Already on our site? {" "}
                                        <Link 
                                            href="/login"
                                            underline="always"
                                            sx={{
                                                color: "inherit",
                                            }}
                                        >
                                            Log in
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;