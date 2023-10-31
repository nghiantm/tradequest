import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { setSymbolInfo } from "../../actions/trading";
import StockFinancials from "./StockData/StockFinancials";

const StockData = () => {
    const symbol = useSelector((state) => state.trading.symbol);
    const symbolInfo = useSelector((state) => state.trading.symbolInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (symbol) {
            axios
                .get(`https://3636mewz2f.execute-api.us-east-1.amazonaws.com/test/getStockInfo?symbol=${symbol.symbol}`)
                .then((res) => {
                    dispatch(setSymbolInfo(res.data));
                })
                .catch((err) => {
                    console.log(err);
                    alert("The Yahoo Finance server is down. Sorry for the inconvenience");
                })
        }
    }, [symbol])  

    return symbol
        ? ( 
            <Box
                sx={{
                    border: 1, borderRadius: 1, borderColor: "#dfdddd",
                    my: 2, mx: 2, p: 2
                }}
            >
                <Grid container spacing={2} height="100%">
                    <Grid item xs={12} md={6} height="100%">
                        <SymbolOverview 
                            symbols={[[symbol.symbol, symbol.symbol]]}
                            chartType="line"
                            width="100%"
                            height={650}
                            isTransparent="true"
                            fontFamily="Montserrat, sans-serif"
                            widgetFontColor="#131722"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} mt={18/8}>
                        <StockFinancials symbol={symbol} symbolInfo={symbolInfo}/>
                    </Grid>
                </Grid>
            </Box>
        )
        : (
            <Box
                sx={{
                    border: 1, borderRadius: 1, borderColor: "#dfdddd",
                    my: 2, mx: 2, p: 2
                }}
            >
                Choose a stock
            </Box>
        )

}

export default StockData;