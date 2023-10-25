import { Box, Button, Container, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputDashboard from "./Trading/InputDashboard";
import StockData from "./Trading/StockData";

const Trading = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <InputDashboard /> 
                <StockData/>
        </Box>
    );
}

export default Trading;