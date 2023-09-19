import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
const Trading = () => {
    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 6 }}>
                <Grid 
                    container
                    spacing={1}
                    sx={{
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h2">
                            Trade NASDAQ 100 Stock
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography variant="h4">
                            Enter your stock symbol
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ececf4',
                                },
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: "#fff",
                                }, 
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant="body"
                        >
                            <Link
                                href="https://www.finscreener.org/screener/stock-screener/nq100"
                                target="_blank"
                                underline="always"
                                sx={{
                                    color: "inherit",
                                }}
                            >
                                Don't know yours?
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            sx={{ 
                                bgcolor: "#000",
                                borderRadius: 5,
                                textTransform: "none",
                                py: 1,
                                my: 1,
                                ":hover": {
                                    bgcolor: "#9c7a63"
                                }
                            }}
                            fullWidth
                        >
                            Start trading
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Trading;