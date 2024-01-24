import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import BasicTabs from "../../Tabs/Tabs.jsx";
import { ProductsContext } from "../../../context/ProductsContext/ProductsContext.jsx";

const ItemList = (props) => {

    const { showTabs } = props;

    const { products, totalPages, setLimit, setPage } = useContext(ProductsContext);

    const handleSetPage = (pageSelected) => {

        setPage(Number(pageSelected));

    };

    const handleSetLimit = (limitSelected) => {

        setPage(1)

        setLimit(Number(limitSelected));

    };

    return (
        <>
            <Container className="container" maxWidth="xl" >

                {showTabs === false ? <select onChange={(e) => (handleSetLimit(e.target.value))}>
                    <option>Seleccionar cantidad de productos a mostrar por página</option>
                    <option value={20}>Todos</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>

                </select> : null}


                <BasicTabs products={products} showTabs={showTabs} />

                {showTabs === false &&
                    Array.from({

                        length: totalPages

                    }, (_, index) => (

                        <button key={index} onClick={() => handleSetPage(index + 1)}>{index + 1}</button>

                    ))
                }


            </Container>
        </>
    )
}

export default ItemList;
