import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import BasicTabs from "../../Tabs/Tabs.jsx";
import { CartContext } from "../../../context/CartContext/CartContext.jsx";
import { LoginContext } from "../../../context/LoginContext/LoginContext.jsx";

const ItemList = (props) => {

    const { cart, setCart, isEmpty, message, setMessage, error, setError } = useContext(CartContext);

    const { currentUser } = useContext(LoginContext);

    useEffect(() => {

        if (currentUser) {

            message && console.log(message);

            error && console.log(error);

            error && setError(null);

            message && setMessage(null);

        } else {

            setError(null);

            setMessage(null);

            setCart(null);

        }

    }, [isEmpty || cart || currentUser]);

    const { products, showTabs } = props;

    return (
        <>
            <Container className="container" maxWidth="xl" >

                <BasicTabs products={products} showTabs={showTabs} />

            </Container>
        </>
    )
}

export default ItemList;
