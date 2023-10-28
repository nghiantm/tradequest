import { AppBar, Box, Button, ButtonBase, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import { useSelector } from "react-redux";

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

const LoggedInView = ({ pathname, user, balance }) => {
    const isCurrent = (path) => {
        return pathname === path;
    };
    
    const navigate = useNavigate();

    const logOut = () => {
        logout();
        navigate("/");
    };

    return (
        <Box>
            <Box 
            sx={{
                bgcolor: "#025fb2",
            }}
            >
                <AppBar 
                    position="static"
                    sx={{ 
                        bgcolor: "inherit",
                    }}
                >
                    <CssBaseline />
                    <Toolbar variant="dense" sx={{ color: "#0000004d" }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    ml: 18/8,
                                    fontSize: "0.9rem"
                                }}
                            >
                                Balance: ${balance.toLocaleString()}
                            </Typography>
                        </Box>

                        <ButtonBase 
                            sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "0.9rem"
                                }}
                            >
                                Welcome, {user.displayName}
                            </Typography>
                        </ButtonBase>

                        <ButtonBase 
                            sx={{ px: 5/8, mx: 12/8 }}
                            onClick={logOut}
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
                                        color: "#fff",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    Logout
                                </Typography>
                            </Box>
                        </ButtonBase>
                    </Toolbar>
                </AppBar>
            </Box>

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
                                        color: "#000"
                                    }}
                                >
                                    TradeQuest
                                </Typography>
                            </ButtonBase>
                        </Box>

                        <ButtonBase 
                            component={Link}
                            to="/portfolio"
                            sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    color: "#000",
                                    textDecoration: isCurrent('/portfolio') ? "underline" : "none",
                                    textUnderlineOffset: 4
                                }}
                            >
                                Portfolio
                            </Typography>
                        </ButtonBase>

                        <ButtonBase 
                            component={Link}
                            to="/trading"
                            sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    color: "#000",
                                    textDecoration: isCurrent('/trading') ? "underline" : "none",
                                    textUnderlineOffset: 4
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
                                        color: "#000",
                                        textDecoration: isCurrent('/account') ? "underline" : "none",
                                        textUnderlineOffset: 4
                                    }}
                                >
                                    Account
                                </Typography>
                            </Box>
                        </ButtonBase>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    )
}

const NavBar = props => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const balance = useSelector((state) => state.account.balance);
    
    return user
        ? <LoggedInView pathname={location.pathname} user={user} balance={balance} /> 
        : <LoggedOutView pathname={location.pathname} />;

}

export default NavBar;