import { Box, Button, Container, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputDashboard from "./Trading/InputDashboard";
import StockData from "./Trading/StockData";
import OrderConfirmation from "./Trading/OrderConfirmation";
import OrderFulfilled from "./Trading/OrderFulfilled";

const Trading = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <InputDashboard /> 
                <StockData/>
                <OrderConfirmation />
                <OrderFulfilled />
        </Box>
    );
}

export default Trading;