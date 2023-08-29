import { Box, Grid, Typography } from "@mui/material";

import React from "react";

const Home = () => {
    return (
        <Box>
            <Box sx={{ pt: 12 }}>
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            display: "inline",
                        }}
                    >
                        Welcome to
                    </Typography>

                    <Typography 
                        variant="h1"
                        sx={{ 
                            color: "#0388ff" 
                        }} 
                    >
                        TradeQuest.
                    </Typography>
                        
                    <Typography
                        variant="h1"
                        sx={{

                        }}
                    >
                        Sharpen your skills.
                    </Typography>
                </Box>
                
                <Grid container>
                    <Grid item xs={12} md={10}>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2
                            }}
                        >
                            Homepage
                        </Typography>
                    
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;