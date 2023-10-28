import { 
    SET_BALANCE, SET_CURRENT_VALUES, SET_MARKET_VALUE_OF_LONG_POSITIONS, SET_ORDER_HISTORY, SET_TRADES_MADE 
} from "../constants/actionTypes";

export const setBalance = (amount) => {
    return {
        type: SET_BALANCE,
        amount: amount
    };
};

export const setOrderHistory = (orderHistory) => {
    return {
        type: SET_ORDER_HISTORY,
        orderHistory: orderHistory
    }
}

export const setMarketValueOfLongPositions = (value) => {
    return {
        type: SET_MARKET_VALUE_OF_LONG_POSITIONS,
        marketValueOfLongPositions: value
    }
}

export const setTradesMade = (amount) => {
    return {
        type: SET_TRADES_MADE,
        amount: amount
    }
}

export const setCurrentValues = (currentValues) => {
    return {
        type: SET_CURRENT_VALUES,
        currentValues: currentValues
    }
}