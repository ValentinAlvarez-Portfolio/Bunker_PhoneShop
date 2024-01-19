import React, { useContext, useState, useEffect } from 'react'
import { IconButton, Badge } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useTheme } from '@mui/material/styles';
import CartContext from '../../context/CartContext/CartContext.jsx';

const CartWidget = () => {

      const { totalQuantity } = useContext(CartContext);

      const [cartQuantity, setCartQuantity] = useState(0);

      useEffect(() => {
            setCartQuantity(totalQuantity)
      }, [totalQuantity])

      const theme = useTheme();

      const styledIconButton = {
            "&:hover": {
                  "& .MuiBadge-badge": {
                        opacity: 0,
                        transition: "0.5s",
                        transform: "scale(0.6)",
                  },
                  backgroundColor: "transparent",
                  transition: "0.3s",
                  transform: "scale(1.05)",
                  color: theme.palette.primary.dark,
            },
            "&:active &:focus": {
                  backgroundColor: "transparent",
            },
      };

      const styledBadge = {
            "& .MuiBadge-badge": {
                  background: theme.palette.info.main,
                  color: "white",
            },
      };

      const styledIcon = {
            color: theme.palette.primary.main,
            fontSize: theme.icons.sizes.xl,
      };

      return (
            <>
                  <IconButton
                        aria-label="cart"
                        sx={styledIconButton}
                  >

                        <Badge
                              badgeContent={cartQuantity === 0 ? "0" : cartQuantity}
                              sx={styledBadge}
                        >

                              <ShoppingBagOutlinedIcon sx={styledIcon} />

                        </Badge>

                  </IconButton>
            </>
      )
}

export default CartWidget