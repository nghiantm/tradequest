import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";

import React from "react";
import { StockMarket } from "react-ts-tradingview-widgets";

const Home = () => {
    return (
        <Container>
            <Box 
                sx={{
                    maxWidth: "600px",
                    mt: 6
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                    
                >
                    <Typography
                        variant="h2"
                        sx={{
                            display: "inline",
                        }}
                    >
                        Welcome to
                    </Typography>    
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            color: "#0388ff"
                        }}
                    >
                        &nbsp;TradeQuest
                    </Typography>

                </Box>
                
                <Typography
                    variant="h4"
                >
                    Our mission is to provide a risk-free approach to learning about stocks. 
                    The tools that we developed make it simple for anyone to get a taste of the market.
                </Typography>
            </Box>

            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                    <StockMarket 
                        width={"100%"}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            bgcolor: "#fff",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.08)",
                            p: 2
                        }}
                    >
                        <Image 
                            width={60}
                            src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-1.png"
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#0388ff",
                                fontWeight: 500
                            }}
                        >
                            Trading Simulator Tool
                        </Typography>

                        <Typography
                            variant="body"
                        >
                        We use Real Time API to update financial data to make sure that our Simulator Tool provides you an authentic and market-based experience.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;