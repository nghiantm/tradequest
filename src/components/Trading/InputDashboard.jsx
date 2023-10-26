import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Button, ButtonBase, Container, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAction, setList, setOpenOrderConfirmation, setQuantity, setSymbol, setType } from "../../actions/trading";
import Loading from "../Loading";

const InputDashboard = () => {
    const state = useSelector((state) => state.trading);
    const symbolInfo = useSelector((state) => state.trading.symbolInfo);
    const dispatch = useDispatch();

    const searchSymbol = async (symbol) => {
        axios
            .get(`https://ticker-2e1ica8b9.now.sh/keyword/${symbol}`)
            .then((res) => {
                dispatch(setList(res.data))
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            })
    };

    const formatNumber = (number) => {
        if (number >= 1e12) {
          // Convert to trillions (T)
          return (number / 1e12).toFixed(1) + 'T';
        } else if (number >= 1e9) {
          // Convert to billions (B)
          return (number / 1e9).toFixed(1) + 'B';
        } else if (number >= 1e6) {
          // Convert to millions (M)
          return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
          // Convert to thousands (K)
            return (number / 1e3).toFixed(1).replace(/\.000$/, '') + 'K';
        } else {
            return (number / 1).toFixed(2);
        }
    } 

    return (
        <Box
            sx={{
                border: 1, borderRadius: 1, borderColor: "#dfdddd",
                my: 2, mx: 2, p: 2
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}> 
                    <InputLabel>Action</InputLabel>

                    <Select
                        variant="outlined"
                        size="small"
                        value={state.action}
                        id="action"
                        onChange={(e) => {
                            dispatch(setAction(e.target.value))
                        }}
                        fullWidth
                    >
                        <MenuItem value={"Buy"}>Buy</MenuItem>
                        <MenuItem value={"Sell"}>Sell</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} md={2}>
                    <InputLabel>Symbol</InputLabel>

                    <Autocomplete
                        freeSolo
                        id="autocompleteSymbol"
                        size="small"
                        value={state.symbol}
                        options={state.autocompleteList}
                        getOptionLabel={(option) => option ? `${option.symbol}` : ""}
                        onInputChange={async (event, newInputValue, reason) => {
                            if (reason === "reset") {
                                null
                            } else {
                                if (newInputValue) {
                                    await searchSymbol(newInputValue);
                                }
                            }
                        }}  
                        onChange={(event, newValue) => {
                            dispatch(setSymbol(newValue))
                        }}
                        disableClearable
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                placeholder="e.g. AAPL"
                                variant="outlined"
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12} md={2}>
                    <InputLabel>Type</InputLabel>

                    <Select
                        variant="outlined"
                        size="small"
                        value={state.type}
                        id="type"
                        onChange={(e) => {
                            dispatch(setType(e.target.value));
                        }}
                        fullWidth
                    >
                        <MenuItem value={"Market"}>Market</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={6} md={1}>
                    <InputLabel>Quantity</InputLabel>

                    <TextField
                        size="small"
                        type="number"
                        id="quantity"
                        value={state.quantity}
                        onChange={(e) => {
                            dispatch(setQuantity(e.target.value))
                        }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} md={1}>
                    <InputLabel>Limit/Stop Price</InputLabel>

                    <TextField
                        size="small"
                        type="number"
                        value={state.limit}
                        id="limit"
                        /*
                        onChange={(e) => {
                            e.preventDefault();
                            handleStateChange("limit", e.target.value)
                        }}
                        */
                        disabled={state.type === "Market"}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={2}>
                    <InputLabel>Order Term</InputLabel>

                    <Select
                        variant="outlined"
                        size="small"
                        value={state.term}
                        id="term"
                        /*
                        onChange={(e) => {
                            handleStateChange("term", e.target.value)
                        }}
                        */
                        disabled={state.type === "Market"}
                        fullWidth
                    >
                        <MenuItem value={"Good for Day"}>Good for Day</MenuItem>
                    </Select>
                </Grid>
        
                <Grid item xs={12} md={2}>
                    <InputLabel>Date</InputLabel>

                    <TextField
                        size="small"
                        type="number"
                        value={state.term}
                        id="term"
                        /*
                        onChange={(e) => {
                            handleStateChange("term", e.target.value)
                        }}
                        */
                        disabled={state.type === "Market"}
                        fullWidth
                    />
                </Grid>

                {
                    //2nd row
                }

                {
                    symbolInfo.data 
                    ? ( 
                    <>
                        <Grid item xs={12} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Last:
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.currentPrice)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Open:
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.open)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Prev. close:
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.previousClose)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Bid: 
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.bid)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Ask: 
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.ask)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    High:
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.dayHigh)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Low: 
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.dayLow)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={1}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Volume: 
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.volume)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                Recommend:
                                </Typography>
                                <Typography 
                                    variant="body" 
                                    fontWeight={700}
                                    sx={{
                                        color: symbolInfo.data.recommendationKey === "buy" 
                                            ? "#089981"
                                            : "#f7525f"
                                    }}
                                >
                                    
                                    {
                                        symbolInfo.data.recommendationKey
                                            ? symbolInfo.data.recommendationKey.toUpperCase()
                                            : "NONE"
                                    }
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Button 
                                size="large"
                                sx={{
                                    bgcolor: state.action === "Buy"
                                        ? "#30CB30"
                                        : "#DC143C",
                                    color: state.action === "Buy"
                                        ? "#000"
                                        : "#fff",
                                    "&:hover": {
                                        bgcolor: state.action === "Buy"
                                            ? "#26a226"
                                            : "#b01030"
                                    },

                                }}
                                fullWidth
                                onClick={(e) => {dispatch(setOpenOrderConfirmation(true))}}
                            >
                                {
                                    state.action === "Buy"
                                        ? (
                                            <Typography variant="body" fontWeight={700}>
                                                BUY
                                            </Typography>
                                        )
                                        : (
                                            <Typography variant="body" fontWeight={700}>
                                                SELL
                                            </Typography>
                                        )
                                }
                            </Button>
                        </Grid>
                    </>
                    ) : null
                }
            </Grid>
        </Box>
    )
}

export default InputDashboard;