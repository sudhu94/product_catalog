import * as actionTypes from '../actions/actionTypes';


const ITEM_PRICES = {
    1: 12000,
    2: 8000,
    3: 10000,
    4: 32500,
    5: 39999,
    6: 2000,
    7: 350,
    8: 899,
    9: 999,
    10: 59899,
    11: 2999,
    12: 1499
}
const initialState = {
    items: [],
    totalPrice: 0
}

const addItem = (state, action) => {
    const newItem = {
        id: action.id,
        title: action.title,
        price: action.price,
        count: action.count
    }
    if (state.items.length !== 0) {
        let updatedItems = null;
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === action.id) {
                const newItem = [...state.items];
                newItem[i].count = state.items[i].count + 1;
                newItem[i].price = ITEM_PRICES[action.id] * state.items[i].count
                updatedItems = {
                    ...state,
                    items: newItem,
                }
                break;
            }
            else {
                updatedItems = {
                    ...state,
                    items: state.items.concat(newItem)
                }
            }
        }
        return updatedItems;
    }
    else {
        return {
            ...state,
            items: state.items.concat(newItem),
        }
    }
}

const itemIncreased = (state, action) => {

    let incresedItem = null;
    for (let i = 0; i < state.items.length; i++) {
        if ((state.items[i].id === action.id) && state.items[i].count > 0) {
            const addMore = [...state.items];
            addMore[i].count = state.items[i].count + 1;
            addMore[i].price = state.items[i].price + ITEM_PRICES[action.id]

            incresedItem = {
                ...state,
                items: addMore
            }
        }
    }
    return incresedItem;
}
const itemDecreased = (state, action) => {
    if (state.items.length !== 0) {
        let decresedItem = null;
        for (let i = 0; i < state.items.length; i++) {
            if ((state.items[i].id === action.id) && state.items[i].count === 1) {
                const deleteItem = state.items.filter(el => el.id !== action.id);
                return {
                    ...state,
                    items: deleteItem
                }

            }
            else if ((state.items[i].id === action.id) && state.items[i].count > 0) {
                const removeItem = [...state.items];
                removeItem[i].count = state.items[i].count - 1;
                removeItem[i].price = state.items[i].price - ITEM_PRICES[action.id]

                decresedItem = {
                    ...state,
                    items: removeItem
                }
            }
        }
        return decresedItem;
    }
    else {
        return
    }
}

const myCart = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state, action);
        case actionTypes.INCREASE_ITEM: return itemIncreased(state, action)
        case actionTypes.DECREASE_ITEM: return itemDecreased(state, action)
        default:
            return state
    }
}

export default myCart;