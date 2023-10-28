const account = {
    balance: 0,
    orderHistory: {},
    tradesMade: 0,
    values: {},
    marketValueOfShortPositions: 0
};

export default (state = account, action) => {
    switch (action.type) {
        case 'SET_BALANCE': 
            return {
                ...state,
                balance: action.amount
            }
        case 'SET_ORDER_HISTORY':
            return {
                ...state,
                orderHistory: action.orderHistory
            }
        case 'SET_MARKET_VALUE_OF_LONG_POSITIONS':
            return {
                ...state,
                marketValueOfLongPositions: action.marketValueOfLongPositions
            }
        case 'SET_TRADES_MADE':
            return {
                ...state,
                tradesMade: action.amount
            }
        case 'SET_CURRENT_VALUES':
            return {
                ...state,
                values: action.currentValues
            }
        default:
            return state;
    };
};