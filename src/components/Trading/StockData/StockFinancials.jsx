import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Loading from "../../Loading";

const StockFinancials = ({ symbol, symbolInfo }) => {
    const formatNumber = (number) => {
        if (number >= 1e12) {
          // Convert to trillions (T)
          return (number / 1e12).toFixed(3) + 'T';
        } else if (number >= 1e9) {
          // Convert to billions (B)
          return (number / 1e9).toFixed(3) + 'B';
        } else if (number >= 1e6) {
          // Convert to millions (M)
          return (number / 1e6).toFixed(3) + 'M';
        } else if (number >= 1e3) {
          // Convert to thousands (K)
            return (number / 1e3).toFixed(3).replace(/\.000$/, '') + 'K';
        } else {
            return (number / 1).toFixed(4);
        }
    }    

    return symbolInfo.data 
        ? (
            <>
                <Typography variant="h3">
                    <span style={{ color: "#0388ff"}}>{symbol.symbol}</span> Financials
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} mt={1}>
                        <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Valuation</Typography>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Market Capitalization
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.marketCap)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Enterprise Value
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.enterpriseValue)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Enterprise To Ebitda
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.enterpriseToEbitda)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Shares Outstanding
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.sharesOutstanding)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Number of Employees
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.fullTimeEmployees)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Price to Book
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.priceToBook)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Price to Sales
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.priceToSalesTrailing12Months)}
                            </Typography>
                        </Box>

                        <Grid item xs={12} mt={3}>
                            <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Balance Sheet</Typography>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Quick Ratio
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.quickRatio)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Current Ratio
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.currentRatio)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Debt to Equity
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.debtToEquity)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Total Debt
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.totalDebt)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Total Cash
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.totalCash)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Operating Metrics</Typography>
                            
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Return on Assets
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.returnOnAssets)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Return on Equity
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.returnOnEquity)}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} mt={1}>
                        <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Price History</Typography>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Average Volume (10 days)
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.averageVolume10days)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                1-Year Beta
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.beta)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                52 Week High
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.fiftyTwoWeekHigh)}
                            </Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography
                                variant="body"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                52 Week Low
                            </Typography>
                            <Typography variant="body" fontWeight={700}>
                                {formatNumber(symbolInfo.data.fiftyTwoWeekLow)}
                            </Typography>
                        </Box>

                        <Grid item xs={12} mt={3}>
                            <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Dividends</Typography>
                        
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Dividends Rate
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.dividendRate)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Dividends Yield
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.dividendYield)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Margins</Typography>
                        
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Profit Margins
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.profitMargins)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Gross Margins
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.grossMargins)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Operating Margins
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.operatingMargins)}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <Typography variant="body" fontSize={"1.2rem"} fontWeight={500}>Income Statement</Typography>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Forward EPS
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.forwardEps)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Trailing EPS
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.trailingEps)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Net Income
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.netIncomeToCommon)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    EBITDA
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.ebitda)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Gross Profit
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.grossProfits)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Total Revenue
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.totalRevenue)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Revenue Growth
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.revenueGrowth)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Typography
                                    variant="body"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Free Cash Flow
                                </Typography>
                                <Typography variant="body" fontWeight={700}>
                                    {formatNumber(symbolInfo.data.freeCashflow)}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </>
    )
    : <Loading />
}

export default StockFinancials;