import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const PortfolioSummary = ({ values }) => {
    const isLargerThanMd = useMediaQuery('(min-width: 900px)');
    const balance = useSelector((state) => state.account.balance);

    const portfolioValue = balance + values.marketValueOfLongPositions;
    const percentageReturn = ((portfolioValue - 200000)/balance)*100;

    return values ? (
        <Box
            sx={{
                border: 1, borderRadius: 1, borderColor: "#dfdddd",
                mt: 2, p: 2,
                mr: isLargerThanMd ? 2 : 0
            }}
        >
            <Typography variant="body" fontWeight={500}>
                Market Value
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"} border={1} borderColor={"#dfdddd"} p={1}>
                <Typography
                    variant="body"
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: 'nowrap'
                    }}
                >
                    Portfolio Value
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    ${portfolioValue.toLocaleString()}
                </Typography>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} border={1} borderColor={"#dfdddd"} p={1}>
                <Typography
                    variant="body"
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: 'nowrap'
                    }}
                >
                    Percentage Return
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    {percentageReturn.toLocaleString()}%
                </Typography>
            </Box>
        </Box>
    ) : null
}

export default PortfolioSummary;