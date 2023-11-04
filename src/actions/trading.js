import { 
    SET_ACTION,
    SET_SYMBOL,
    SET_LIST,
    SET_QUANTITY,
    SET_TYPE,
    SET_LIMIT,
    SET_TERM,
    SET_SYMBOL_INFO,
    SET_OPEN_BUY_ORDER_CONFIRMATION,
    SET_BALANCE,
    SET_OPEN_ORDER_FULFILL,
    SET_OPEN_SELL_ORDER_CONFIRMATION,
    SET_SYMBOL_PRICE
} from "../constants/actionTypes";

export const setAction = (action) => {
    return {
        type: SET_ACTION,
        action: action
    }
}

export const setQuantity = (quantity) => {
    return {
        type: SET_QUANTITY,
        quantity: quantity
    }
}

export const setType = (type) => {
    return {
        type: SET_TYPE,
        order_type: type
    }
}

export const setSymbol = (symbol) => {
    return {
        type: SET_SYMBOL,
        symbol: symbol
    }
}

export const setList = (list) => {
    return {
        type: SET_LIST,
        list: list
    }
}

export const setSymbolInfo = (data) => {
    return {
        type: SET_SYMBOL_INFO,
        data: data
    }
}

export const setSymbolPrice = (data) => {
    return {
        type: SET_SYMBOL_PRICE,
        data: data
    }
}

export const setOpenBuyOrderConfirmation = (status) => {
    //boolean status: true/false
    return {
        type: SET_OPEN_BUY_ORDER_CONFIRMATION,
        status: status
    }
}

export const setOpenOrderFulfilled = (status) => {
    return {
        type: SET_OPEN_ORDER_FULFILL,
        status: status
    }
}

export const setOpenSellOrderConfirmation = (status) => {
    return {
        type: SET_OPEN_SELL_ORDER_CONFIRMATION,
        status: status
    }
}