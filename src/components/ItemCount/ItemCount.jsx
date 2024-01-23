import { Button, ButtonGroup } from '@mui/material';
import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext/CartContext';

const ItemCount = (props) => {

    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleDecreaseQuantity = () => {
        decreaseQuantity(props.prod.id);
    };

    const handleIncreaseQuantity = () => {
        increaseQuantity(props.prod.id);
    };

    return (

        <>
            {
                props.where === "cart" ? (
                    <ButtonGroup variant="outlined">

                        <Button onClick={handleDecreaseQuantity} disabled={props.prod.quantity === 1}>
                            -
                        </Button>

                        <Button>
                            {props.prod.quantity}
                        </Button>

                        <Button onClick={handleIncreaseQuantity} disabled={props.prod.stock === 0}>
                            +
                        </Button>

                    </ButtonGroup>
                ) : (
                    <ButtonGroup variant="outlined">

                        <Button>
                            {props.prod.quantity}
                        </Button>

                    </ButtonGroup>
                )
            }

        </>


    );
};

export default ItemCount;