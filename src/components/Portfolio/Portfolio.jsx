import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import BalanceSummary from "./BalanceSummary";
import MarketValue from "./MarketValue";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentValues, setMarketValueOfLongPositions } from "../../actions/account";
import BuyingPower from "./BuyingPower";
import OpenPositions from "./OpenPositions";
import Loading from "../Loading";
import PortfolioSummary from "./PortfolioSummary";

const Portfolio = () => {
    const dispatch = useDispatch();
    const orderHistory = useSelector((state) => state.account.orderHistory);
    const marketValue = useSelector((state) => state.account.values);

    useEffect(() => {
        if (orderHistory) {
            const values = {
                marketValueOfLongPositions: 0,
                marketValues: {}
            };
            let marketValueOfLongPositions = 0;

            const axiosRequests = [];

            for (const symbol in orderHistory) {
                const axiosRequest = axios
                    .get(`https://xo94829u56.execute-api.us-east-1.amazonaws.com/test/getStockData?symbol=${symbol}`)
                    .then((res) => {
                        marketValueOfLongPositions += (orderHistory[symbol].shares)*res.data.data.close;
                        values.marketValues[symbol] = (orderHistory[symbol].shares)*res.data.data.close
                    })
                    .catch((err) => {
                        console.log(err);
                        alert(err.message);
                    })
                
                axiosRequests.push(axiosRequest);
            }

            Promise.all(axiosRequests)
                .then(() => {
                    values["marketValueOfLongPositions"] = marketValueOfLongPositions;
                    dispatch(setCurrentValues(values));
                })
                .catch((err) => {
                    console.log(err);
                })

        } 
    }, [orderHistory]);

    return marketValue && marketValue.marketValueOfLongPositions ? (
        <Container maxWidth={"lg"}>
            {console.log(marketValue)}
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <BalanceSummary />

                        <Grid item xs={12} mt={4}>
                            <BuyingPower />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MarketValue values={marketValue}/>
                        <Grid item xs={12} mt={4}>
                            <PortfolioSummary values={marketValue} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <OpenPositions values={marketValue}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    ) : <Loading />
};

export default Portfolio;