const trading = {
    action: "Buy",
    symbol: "",
    autocompleteList: [],
    quantity: 100,
    type: "Market",
    limit: 0,
    term: "Good for Day",
    symbolInfo: {},
    symbolPrice: {},
    openBuyOrderConfirmation: false,
    openOrderFulfilled: false,
    openSellOrderConfirmation: false,
};

export default (state = trading, action) => {
    switch (action.type) {
        case 'SET_ACTION':
            return {
                ...state,
                "action": action.action
            }
        case 'SET_QUANTITY':
            return {
                ...state,
                "quantity": action.quantity
            }
        case 'SET_TYPE':
            return {
                ...state,
                "type": action.order_type
            }
        case 'SET_SYMBOL':
            return {
                ...state,
                "symbol": action.symbol
            }
        case 'SET_LIST':
            return {
                ...state,
                "autocompleteList": action.list
            }
        case 'SET_SYMBOL_INFO':
            return {
                ...state,
                "symbolInfo": action.data
            }
        case 'SET_SYMBOL_PRICE':
            return {
                ...state,
                "symbolPrice": action.data
            }
        case 'SET_OPEN_BUY_ORDER_CONFIRMATION':
            return {
                ...state,
                "openBuyOrderConfirmation": action.status
            }
        case 'SET_OPEN_ORDER_FULFILLED':
            return {
                ...state,
                "openOrderFulfilled": action.status
            }
        case 'SET_OPEN_SELL_ORDER_CONFIRMATION':
            return {
                ...state,
                "openSellOrderConfirmation": action.status
            }
        default:
            return state;
    }
}