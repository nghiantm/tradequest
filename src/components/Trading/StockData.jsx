import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { setSymbolInfo, setSymbolPrice } from "../../actions/trading";
import StockFinancials from "./StockData/StockFinancials";

const StockData = () => {
    const symbol = useSelector((state) => state.trading.symbol);
    const symbolInfo = useSelector((state) => state.trading.symbolInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (symbol) {
                try {
                    const res = await axios.get(`https://xo94829u56.execute-api.us-east-1.amazonaws.com/test/getStockData?symbol=${symbol.symbol}`);
                    console.log(res)
                    dispatch(setSymbolPrice(res.data));
                } catch (err) {
                    console.log(err);
                    alert(err.message);
                }
                try {
                    const res = await axios.get(`https://3636mewz2f.execute-api.us-east-1.amazonaws.com/test/getStockInfo?symbol=${symbol.symbol}`);
                    dispatch(setSymbolInfo(res.data));
                } catch (err) {
                    console.log(err);
                    alert("The Yahoo Finance server is down. We couldn't fetch the company's information. Sorry for the inconvenience");
                }
            }
        }

        fetchData();
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