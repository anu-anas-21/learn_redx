import { createStore } from 'redux';

const initialState = {
    user: {
        username: "Anas",
        balance: 25000
    }
};

export const updateWallet = (amt)=>({
    type: 'UPDATE',
    payload: amt
})

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE':
            return {
                user: {
                    username: state.user.username,
                    balance: state.user.balance - action.payload,
                }
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;