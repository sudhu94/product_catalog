import React, { Fragment } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './MyOrders.css';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const MyOrder = (props) => {

    return (
        <Fragment>
            <div className="MyOrder">
                <div className="Items">
                    <div>
                        {props.items.title}
                    </div>
                    <div>
                        <CurrencyRupeeIcon style={{ fontSize: 'larger' }} /> {props.items.price.toLocaleString()}
                        <div>
                            <ButtonGroup variant="contained" color="error" aria-label="contained button group">
                                <Button onClick={props.removed}><RemoveIcon style={{ fontSize: 'medium' }} /></Button>
                                <Button>{props.items.count}</Button>
                                <Button onClick={props.added}><AddIcon style={{ fontSize: 'medium' }} /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default MyOrder;