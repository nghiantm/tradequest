const account = {
    balance: 0
};

export default (state = account, action) => {
    switch (action.type) {
        case 'SET_BALANCE': 
            return {
                ...state,
                balance: action.amount
            }
        default:
            return state;
    };
};