import { AppBar, Box, Button, ButtonBase, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import Image from "mui-image";

const LoggedOutView = ({ pathname }) => {
    const isCurrent = (path) => {
        return pathname === path;
    };

    return (
        <Box >
            <AppBar 
                sx={{ 
                    bgcolor: "inherit", 
                    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)"
                }}
            >
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

const LoggedInView = ({ pathname, user }) => {
    const isCurrent = (path) => {
        return pathname === path;
    };

    return (
        <Box 
        sx={{
            bgcolor: "#fff",
        }}
        >
            <AppBar 
                position="static"
                sx={{ 
                    bgcolor: "inherit", 
                    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)"
                }}
            >
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
                        to="/trading"
                        sx={{ px: 5/8, mx: 12/8 }}>
                        <Typography
                            sx={{
                                color: isCurrent('/trading') ? "#000000cc" : "inherit"
                            }}
                        >
                            Trade Stocks
                        </Typography>
                    </ButtonBase>

                    <ButtonBase 
                        component={Link}
                        to="/account"
                        sx={{ px: 5/8, mx: 12/8 }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                overflow: "hidden",
                                alignItems: "center"
                            }}
                        >   
                            <Typography
                                sx={{
                                    color: isCurrent('/account') ? "#000000cc" : "inherit",
                                }}
                            >
                                {user.displayName}
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const NavBar = props => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    
    return user 
        ? <LoggedInView pathname={location.pathname} user={user} /> 
        : <LoggedOutView pathname={location.pathname} />;

}

export default NavBar;