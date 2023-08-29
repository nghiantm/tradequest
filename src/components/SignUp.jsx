import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import signupImage from "../assets/signup-image.jpg";

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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: "100vh",
                            ml: "4rem"
                        }}
                    >
                        <Grid container spacing={2}>
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

                            <Grid item md={7} sm={9} xs={10}>
                                <TextField 
                                    variant="outlined"
                                    size="small"
                                    label="Username"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item md={7} sm={9} xs={10}>
                                <TextField 
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item md={7} sm={9} xs={10}>
                                <TextField 
                                    variant="outlined"
                                    size="small"
                                    type="password"
                                    label="Password"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel 
                                    control={<Checkbox />}
                                    label="Remember me"
                                />
                            </Grid>

                            <Grid item xs={5} sm={3}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    sx={{ 
                                        bgcolor: "#000",
                                        borderRadius: 10,
                                        textTransform: "none",
                                        py: 1
                                    }}
                                    fullWidth
                                >
                                    Sign up
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;