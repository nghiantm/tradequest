import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BuyingPower = () => {
    const isLargerThanMd = useMediaQuery('(min-width: 900px)');
    const balance = useSelector((state) => state.account.balance);
    const tradesMade = useSelector((state) => state.account.tradesMade);

    return (
        <Box
            sx={{
                border: 1, borderRadius: 1, borderColor: "#dfdddd",
                mt: 2, p: 2,
                ml: isLargerThanMd ? 2 : 0

            }}
        >
            <Typography variant="body" fontWeight={500}>
                Buying Power
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
                    Buying Power
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    ${balance.toLocaleString()}
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
                    Trades Made
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    {tradesMade}
                </Typography>
            </Box>
        </Box>
    )
}

export default BuyingPower;