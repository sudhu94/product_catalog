import * as actionTypes from '../actionTypes';


export const itemAdded = (id, title, price, count) => {
    return {
        type: actionTypes.ADD_ITEM,
        id: id,
        title: title,
        price: price,
        count: count
    }
}
export const itemRemoved = (id, title, price) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id: id,
        title: title,
        price: price
    }
}
export const setItems = () => {
    return {
        type: actionTypes.INIT_ITEMS
    }
}
export const increaseItem = (id, count, price) => {
    return {
        type: actionTypes.INCREASE_ITEM,
        id: id,
        count: count,
        price: price
    }
}
export const decreaseItem = (id, count, price) => {
    return {
        type: actionTypes.DECREASE_ITEM,
        id: id,
        count: count,
        price: price
    }
}