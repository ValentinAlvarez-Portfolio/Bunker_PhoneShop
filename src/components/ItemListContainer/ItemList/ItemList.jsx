import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import BasicTabs from "../../Tabs/Tabs.jsx";
import { CartContext } from "../../../context/CartContext/CartContext.jsx";
import { LoginContext } from "../../../context/LoginContext/LoginContext.jsx";

const ItemList = (props) => {

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
