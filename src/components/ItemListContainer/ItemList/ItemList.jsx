import { Container } from "@mui/material";
import BasicTabs from "../../Tabs/Tabs.jsx";

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
