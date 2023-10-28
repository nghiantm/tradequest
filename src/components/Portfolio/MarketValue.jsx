import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const MarketValue = ({ values }) => {
    const isLargerThanMd = useMediaQuery('(min-width: 900px)');

    //const values = useSelector((state) => state.account.values);
    const marketValueOfShortPositions = useSelector((state) => state.account.marketValueOfShortPositions);

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
                    Market value of Long Positions
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    ${values.marketValueOfLongPositions.toLocaleString()}
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
                    Market value of Short Positions
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    ${marketValueOfShortPositions}
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
                    Market value of All Positions
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    ${(marketValueOfShortPositions + values.marketValueOfLongPositions).toLocaleString()}
                </Typography>
            </Box>
        </Box>
    ) : null
}

export default MarketValue;