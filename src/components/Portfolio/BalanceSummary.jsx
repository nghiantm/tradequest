import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BalanceSummary = () => {
    const isLargerThanMd = useMediaQuery('(min-width: 900px)');
    const balance = useSelector((state) => state.account.balance);

    return (
        <Box
            sx={{
                border: 1, borderRadius: 1, borderColor: "#dfdddd",
                mt: 2, p: 2,
                ml: isLargerThanMd ? 2 : 0

            }}
        >
            <Typography variant="body" fontWeight={500}>
                Cash
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
                    Initial Cash
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    $200,000
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
                    Cash Balance
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
                    Loan Balance
                </Typography>
                <Typography variant="body" fontWeight={700}>
                    $0
                </Typography>
            </Box>
        </Box>
    )
}

export default BalanceSummary;