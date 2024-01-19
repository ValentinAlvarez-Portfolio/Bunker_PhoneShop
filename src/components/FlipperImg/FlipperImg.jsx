import { Box, Divider } from "@mui/material";

const FlipperImg = ({ product, size }) => {


    return (
        <Box
            className="flipper-image-container"
            style={{
                width: size,
                height: size,
            }}
        >
            <img
                width={size}
                height={size}
                src={product.thumbnails[0]}
                alt={product.title}
                className="flipper-image"

            />
            <img
                width={size}
                height={size}
                src={product.thumbnails[1] ? product.thumbnails[1] : product.thumbnails[0]}
                alt={product.title}
                className="flipper-image-secondary"
            />
        </Box>
    );
};

export default FlipperImg;