import { 
    SET_BALANCE 
} from "../constants/actionTypes";

export const setBalance = (amount) => {
    return {
        type: SET_BALANCE,
        amount: amount
    };
};