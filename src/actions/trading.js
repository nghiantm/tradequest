import { 
    SET_ACTION,
    SET_SYMBOL,
    SET_LIST,
    SET_QUANTITY,
    SET_TYPE,
    SET_LIMIT,
    SET_TERM,
    SET_SYMBOL_INFO
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