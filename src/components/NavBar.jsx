import { AppBar, Box, Button, ButtonBase, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LoggedOutView = ({ pathname }) => {
    const isCurrent = (path) => {
        return pathname === path;
    };

    return (
            <Box 
                sx={{
                    bgcolor: "transparent",
                    backdropFilter: "blur(5px)",
                    position: "sticky",
                    top: 0
                }}
            >
                <AppBar position="static" sx={{ bgcolor: "inherit", boxShadow: "none" }}>
                    <CssBaseline />
                    <Toolbar sx={{ color: "#0000004d" }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <ButtonBase 
                                sx={{ 
                                    justifyContent: "flex-start",
                                    mx: 12/8
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#313131"
                                    }}
                                >
                                    TradeQuest
                                </Typography>
                            </ButtonBase>
                        </Box>

                        <ButtonBase 
                            component={Link}
                            to="/"
                            sx={{ px: 5/8, mx: 12/8 }}
                        >
                            <Typography
                                sx={{
                                    color: isCurrent('/') ? "#000000cc" : "inherit"
                                }}
                            >
                                Home
                            </Typography>
                        </ButtonBase>

                        <ButtonBase 
                            component={Link}
                            to="/login"
                            sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    color: isCurrent('/login') ? "#000000cc" : "inherit"
                                }}
                            >
                                Log in
                            </Typography>
                        </ButtonBase>

                        <ButtonBase 
                            component={Link} 
                            to="/signup" 
                            sx={{ px: 5/8, mx: 12/8 }}
                        >
                            <Typography
                                sx={{
                                    color: isCurrent('/signup') ? "#000000cc" : "inherit "
                                }}
                            >
                                Sign up
                            </Typography>
                        </ButtonBase>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

const NavBar = props => {
    const location = useLocation();

    return (
        <>
            <LoggedOutView pathname={location.pathname} />
        </>
    )
}

export default NavBar;