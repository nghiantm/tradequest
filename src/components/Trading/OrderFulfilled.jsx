import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenOrderFulfilled } from "../../actions/trading";

const OrderFulfilled = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openOrderFulfilledState = useSelector((state) => state.trading.openOrderFulfilled);

    return (
        <Box>
            <Dialog
                fullScreen={fullScreen}
                open={openOrderFulfilledState}
                onClose={() => dispatch(setOpenOrderFulfilled(false))}
            >
                <DialogTitle>Order Fulfilled</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Your order has been fulfilled. Good luck!
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={() => dispatch(setOpenOrderFulfilled(false))}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )

}

export default OrderFulfilled;