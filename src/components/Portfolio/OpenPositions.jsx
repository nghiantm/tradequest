import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const OpenPositions = ({ values }) => {
    const isLargerThanMd = useMediaQuery('(min-width: 900px)');
    const balance = useSelector((state) => state.account.balance);
    const orderHistory = useSelector((state) => state.account.orderHistory);

    return values ? (
        <Box
            sx={{
                border: 1, borderRadius: 1, borderColor: "#dfdddd",
                p: 2,
                mx: isLargerThanMd ? 2 : 0

            }}
        >
            <Typography variant="body" fontWeight={500}>
                Open Positions / Costs
            </Typography>
            
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Symbol</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total Cost </TableCell>
                            <TableCell align="right">Market Value</TableCell>
                            <TableCell align="right">% Profit/Loss</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(orderHistory).map((symbol) => {
                                const symbolData = orderHistory[symbol];
                                return (
                                    <TableRow key={symbol}>
                                        <TableCell>{symbol}</TableCell>
                                        <TableCell align="right">{symbolData.shares}</TableCell>
                                        <TableCell align="right">${symbolData.totalCost.toLocaleString()}</TableCell>
                                        <TableCell align="right">${values.marketValues[symbol].toLocaleString()}</TableCell>
                                            
                                        {
                                            (values.marketValues[symbol] > symbolData.totalCost)
                                                ? <TableCell
                                                    align="right"
                                                    sx={{
                                                        color: "#26a226"
                                                    }}
                                                >
                                                    {((values.marketValues[symbol] - symbolData.totalCost)/symbolData.totalCost*100).toFixed(2)}%
                                                </TableCell>
                                                : <TableCell 
                                                    align="right"
                                                    sx={{
                                                        color: "#b01030"
                                                    }}
                                                >
                                                    {((values.marketValues[symbol] - symbolData.totalCost)/symbolData.totalCost*100).toFixed(2)}%
                                                </TableCell>
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
               </Table>
            </TableContainer>
        </Box>
    ) : <Loading />
}

export default OpenPositions;