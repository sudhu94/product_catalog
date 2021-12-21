import React, { Fragment } from 'react';
import Item from '../Cards/Items/Item';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import {toast} from 'react-toastify';
   
toast.configure()

const Home = (props) => {

    const items = useSelector(state => state.items);
    const dispatch = useDispatch();


    const addItemHandler = (id, title, price, count) => {
        dispatch(actions.itemAdded(id, title, price, count));
        toast.success('Item added to cart.' ,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
    }

    return (
        <Fragment>
            <Container>
                <div>
                    <Row>
                        {
                            items.map(item => (
                                <Col md={3} style={{ margin: '1% 0' }} key={item.id}>
                                    <Item
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        desc={item.description}
                                        price={item.price}
                                        button={item.button}
                                        added={() => addItemHandler(item.id, item.title, item.price, item.count)}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>

        </Fragment>
    );
}

export default Home;