import { Box, Container } from "@mui/material";
import React from "react";
import InputDashboard from "./InputDashboard";
import StockData from "./StockData";
import OrderFulfilled from "./OrderFulfilled";
import BuyOrderConfirmation from "./OrderConfirmation";
import SellOrderConfirmation from "./SellOrderConfirmation";

const Trading = () => {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <InputDashboard /> 
                <StockData/>
                <BuyOrderConfirmation />
                <SellOrderConfirmation />
                <OrderFulfilled />
            </Box>
        </Container>
    );
}

export default Trading;