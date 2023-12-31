import { useTheme } from "@emotion/react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenBuyOrderConfirmation, setOpenOrderFulfilled } from "../../actions/trading";
import { auth, writeTransaction } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const BuyOrderConfirmation = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openBuyOrderConfirmationState = useSelector((state) => state.trading.openBuyOrderConfirmation)
    const quantity = Number(useSelector((state) => state.trading.quantity));
    const symbol = useSelector((state) => state.trading.symbol);
    const symbolPrice = useSelector((state) => state.trading.symbolPrice);
    const balance = useSelector((state) => state.account.balance);

    const [user, loading, error] = useAuthState(auth);

    return symbolPrice && symbolPrice.data  ? (
        <Box>
            <Dialog
                fullScreen={fullScreen}
                open={openBuyOrderConfirmationState}
                onClose={() => dispatch(setOpenBuyOrderConfirmation(false))}
            >
                <DialogTitle>Confirm Your Order</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Place order for {quantity} shares at ${symbolPrice.data.close} (Asking Price)
                    </DialogContentText>
                    { 
                        quantity*symbolPrice.data.close <= balance
                            ? <DialogContentText color={"#1972d2"}>
                                Transaction cost: -${quantity*symbolPrice.data.close}
                            </DialogContentText>
                            : <DialogContentText color={"#1972d2"}>
                                Insufficient funds
                            </DialogContentText>
                    }
                </DialogContent>

                {
                    quantity*symbolPrice.data.close <= balance
                        ? <DialogActions>
                              <Button autoFocus onClick={() => dispatch(setOpenBuyOrderConfirmation(false))}>
                                Cancel
                            </Button>
                            <Button 
                                autoFocus 
                                onClick={async () => {
                                    await writeTransaction(user.uid, balance, symbol.symbol, quantity, symbolPrice.data.close);
                                    dispatch(setOpenBuyOrderConfirmation(false));
                                    dispatch(setOpenOrderFulfilled(true));
                                }}
                            >
                                Confirm
                            </Button>
                        </DialogActions>
                        : <DialogActions>
                            <Button autoFocus onClick={() => dispatch(setOpenBuyOrderConfirmation(false))}>
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
                open={openBuyOrderConfirmationState}
                onClose={() => dispatch(setOpenBuyOrderConfirmation(false))}
            >
                <DialogTitle>Error</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        We can't trade this stock at this time. Sorry for the inconvenience.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={() => dispatch(setOpenBuyOrderConfirmation(false))}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default BuyOrderConfirmation;