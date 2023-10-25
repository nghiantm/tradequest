import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Container, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAction, setList, setQuantity, setSymbol, setType } from "../../actions/trading";

const InputDashboard = () => {
    const state = useSelector((state) => state.trading);
    const dispatch = useDispatch();

    console.log(state);

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
                                console.log("OnIntChange", newInputValue);
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

                <Grid item xs={12} md={1}>
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

                <Grid item xs={6} md={2}>
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
        
                <Grid item xs={6} md={1}>
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
            </Grid>
        </Box>
    )
}

export default InputDashboard;