import { useTheme } from "@emotion/react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSellOrderConfirmation, setOpenOrderFulfilled } from "../../actions/trading";
import { auth, writeTransaction } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SellOrderConfirmation = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openSellOrderConfirmationState = useSelector((state) => state.trading.openSellOrderConfirmation);
    const quantity = Number(useSelector((state) => state.trading.quantity));
    const symbol = useSelector((state) => state.trading.symbol).symbol;
    const symbolPrice = useSelector((state) => state.trading.symbolPrice);
    const balance = useSelector((state) => state.account.balance);
    const orderHistory = useSelector((state) => state.account.orderHistory);

    const [user, loading, error] = useAuthState(auth);

    return symbolPrice.data && symbolPrice.data.close && orderHistory && orderHistory[symbol] ? (
        <Box>
            <Dialog
                fullScreen={fullScreen}
                open={openSellOrderConfirmationState}
                onClose={() => dispatch(setOpenSellOrderConfirmation(false))}
            >
                <DialogTitle>Confirm Your Order</DialogTitle>

                {
                    orderHistory[symbol].shares >= quantity
                        ? <DialogContent>
                            <DialogContentText>
                                Place order to sell {quantity} shares at ${symbolPrice.data.close} (closeding Price)
                            </DialogContentText>
                            <DialogContentText color={"#1972d2"}>
                                Transaction value: ${quantity*symbolPrice.data.close} (You have {orderHistory[symbol].shares} shares)
                            </DialogContentText>
                        </DialogContent>
                        : <DialogContent>
                        <DialogContentText>
                            Place order to sell {quantity} shares at ${symbolPrice.data.close} (closeding Price)
                        </DialogContentText>
                        <DialogContentText color={"#1972d2"}>
                            Insufficient number of shares (You have {orderHistory[symbol].shares} shares)
                        </DialogContentText>
                    </DialogContent>
                }

                {
                    orderHistory[symbol].shares >= quantity
                        ? <DialogActions>
                            <Button autoFocus onClick={() => dispatch(setOpenSellOrderConfirmation(false))}>
                                Cancel
                            </Button>
                            <Button 
                                autoFocus 
                                onClick={async () => {
                                    await writeTransaction(user.uid, balance, symbol, (-1)*quantity, symbolPrice.data.close);
                                    dispatch(setOpenSellOrderConfirmation(false));
                                    dispatch(setOpenOrderFulfilled(true));
                                }}
                            >
                                Confirm
                            </Button>
                        </DialogActions>
                        : <DialogActions>
                            <Button autoFocus onClick={() => dispatch(setOpenSellOrderConfirmation(false))}>
                                Close
                            </Button>
                        </DialogActions>
                }
            </Dialog>
        </Box>
    ) : null
}

export default SellOrderConfirmation;