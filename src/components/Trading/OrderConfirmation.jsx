import { useTheme } from "@emotion/react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenOrderConfirmation, setOpenOrderFulfilled } from "../../actions/trading";
import { auth, writeTransaction } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const OrderConfirmation = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openOrderConfirmationState = useSelector((state) => state.trading.openOrderConfirmation)
    const quantity = useSelector((state) => state.trading.quantity);
    const symbol = useSelector((state) => state.trading.symbol);
    const symbolInfo = useSelector((state) => state.trading.symbolInfo);
    const balance = useSelector((state) => state.account.balance);

    const [user, loading, error] = useAuthState(auth);

    return symbolInfo.data && symbolInfo.data.ask  ? (
        <Box>
            <Dialog
                fullScreen={fullScreen}
                open={openOrderConfirmationState}
                onClose={() => dispatch(setOpenOrderConfirmation(false))}
            >
                <DialogTitle>Confirm Your Order</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Place order for {quantity} shares at {symbolInfo.data.ask} (Asking Price)
                    </DialogContentText>
                    { 
                        quantity*symbolInfo.data.ask <= balance
                            ? <DialogContentText color={"#1972d2"}>
                                Transaction cost: ${quantity*symbolInfo.data.ask}
                            </DialogContentText>
                            : <DialogContentText color={"#1972d2"}>
                                Insufficient funds
                            </DialogContentText>
                    }
                </DialogContent>

                {
                    quantity*symbolInfo.data.ask <= balance
                        ? <DialogActions>
                            <Button autoFocus onClick={() => dispatch(setOpenOrderConfirmation(false))}>
                                Cancel
                            </Button>
                            <Button 
                                autoFocus 
                                onClick={async () => {
                                    await writeTransaction(user.uid, balance, symbol.symbol, quantity, symbolInfo.data.ask);
                                    dispatch(setOpenOrderConfirmation(false));
                                    dispatch(setOpenOrderFulfilled(true));
                                }}
                            >
                                Confirm
                            </Button>
                        </DialogActions>
                        : <DialogActions>
                            <Button autoFocus onClick={() => dispatch(setOpenOrderConfirmation(false))}>
                                Close
                            </Button>
                        </DialogActions>
                }
            </Dialog>
        </Box>
    ) : (
        <Box>
            <Dialog
                fullScreen={fullScreen}
                open={openOrderConfirmationState}
                onClose={() => dispatch(setOpenOrderConfirmation(false))}
            >
                <DialogTitle>Error</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        We can't trade this stock at this time. Sorry for the inconvenience.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={() => dispatch(setOpenOrderConfirmation(false))}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default OrderConfirmation;