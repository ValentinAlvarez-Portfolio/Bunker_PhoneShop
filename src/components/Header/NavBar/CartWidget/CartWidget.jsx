import React, { useContext, useState, useEffect } from 'react'
import { IconButton, Badge, Box, Typography } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useTheme } from '@mui/material/styles';
import { CartContext } from '../../../../context/CartContext/CartContext.jsx';
import CartOverlay from '../CartOverlay/CartOverlay.jsx';

const CartWidget = () => {

      const [isVisible, setIsVisible] = useState(false);

      const [enterWidget, setEnterWidget] = useState(false);
      const [leaveWidget, setLeaveWidget] = useState(false);

      const [enterOverlay, setEnterOverlay] = useState(false);
      const [leaveOverlay, setLeaveOverlay] = useState(false);

      const handleMouseEnter = () => {

            setLeaveWidget(false);

            setEnterWidget(true);

            setIsVisible(true);
      };

      const handleMouseLeave = () => {

            setTimeout(() => {
                  setEnterWidget(false);
            }, 200);

            setLeaveWidget(true);

            setIsVisible(false);
      };

      const { cart } = useContext(CartContext);

      const [totalQuantity, setTotalQuantity] = useState(0);

      useEffect(() => {
            setTotalQuantity(cart ? cart.cartQuantity : 0)
      }, [cart])

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
            <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
            }}


            >
                  <Typography fontFamily={"regular"} style={{
                        color: theme.palette.secondary.main,
                        fontSize: theme.typography.fontSize.md,
                        marginRight: "0.5rem",
                        marginTop: "0.25rem",
                  }}
                        onClick={handleMouseEnter}
                  >
                        {cart ? cart.cartQuantity : "0"} item(s) - ${cart ? cart.cartTotal : "0"}

                  </Typography>

                  <IconButton
                        aria-label="cart"
                        sx={styledIconButton}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                  >

                        <Badge
                              badgeContent={totalQuantity === 0 ? "0" : totalQuantity}
                              sx={styledBadge}
                        >

                              <ShoppingBagOutlinedIcon sx={styledIcon} />

                        </Badge>




                  </IconButton>

                  <CartOverlay
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        enterWidget={enterWidget}
                        setEnterWidget={setEnterWidget}
                        leaveWidget={leaveWidget}
                        setLeaveWidget={setLeaveWidget}
                        enterOverlay={enterOverlay}
                        setEnterOverlay={setEnterOverlay}
                        leaveOverlay={leaveOverlay}
                        setLeaveOverlay={setLeaveOverlay}
                  />


            </Box>
      )
}

export default CartWidget