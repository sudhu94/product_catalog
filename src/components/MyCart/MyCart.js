import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyOrder from '../Cards/MyOrders/MyOrders';
import page_not_found from '../../assets/Images/not_found.png';
import * as actions from '../../store/actions/index';
// import Footer from '../../UI/Footerbar/Footerbar';


const MyCart = (props) => {

    const items = useSelector(state => state.myCart)
    const dispatch = useDispatch();
    const removeItemHandler = (id, count, price) => {
        // console.log(id, count, price)
        dispatch(actions.decreaseItem(id, count, price));
    }
    const addItemHandler = (id, count, price) => {
        // console.log(id, count, price)
        dispatch(actions.increaseItem(id, count, price));
    }
    return (
        <Fragment>

            {items.items.length !== 0 ?
                items.items.map(item => (
                    <MyOrder
                        items={item}
                        key={item.id}
                        removed={() => removeItemHandler(item.id, item.count, item.price)}
                        added={() => addItemHandler(item.id, item.count, item.price)}
                    />
                ))
                :
                <div style={{ textAlign: 'center' }}>
                    <img src={page_not_found} alt="Page Not Found" />
                </div>

            }
            {/* {items.items.length !== 0 ? <Footer totalPrice={items.totalPrice} /> : ''} */}
        </Fragment>
    )
}

export default MyCart;