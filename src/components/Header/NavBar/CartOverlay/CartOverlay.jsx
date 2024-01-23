import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../context/CartContext/CartContext.jsx';
import { LoginContext } from '../../../../context/LoginContext/LoginContext.jsx';
import { Link } from 'react-router-dom'

const CartOverlay = (props) => {

      const { cart, getCartByUserId, clearCart } = useContext(CartContext);
      const { currentUser, isAuthenticated } = useContext(LoginContext);

      const [isEmpty, setIsEmpty] = useState(true);

      useEffect(() => {

            const loadData = async () => {

                  const result = await getCartByUserId();

            };

            loadData();

      }, [isAuthenticated && (isEmpty || cart.cartItems)]);

      const items = cart ? cart.cartItems : [];

      const handleMouseEnter = () => {

            props.setEnterWidget(true);

            props.setIsVisible(true);

            props.setLeaveOverlay(false);
            props.setEnterOverlay(true);

            props.setEnterWidget(true);

      }

      const handleMouseLeave = () => {
            props.setEnterOverlay(false);
            props.setLeaveOverlay(true);

            props.setIsVisible(false);
      }

      const handleClearCart = () => {

            clearCart();

            setIsEmpty(true);

      }

      return (
            <>
                  <div className="cart-overlay"
                        style={{
                              visibility: props.isVisible ? "visible" : "hidden",
                              opacity: props.isVisible ? 1 : 0,
                              transition: "all 0.5s ease-in-out",
                              position: "absolute",
                              top: "124%",
                              right: "-4%",
                              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                              padding: "2rem 4rem",
                              backgroundColor: "white",
                              color: "black",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {items.length > 0 ? items.map((item, index) => {
                              return (
                                    <div className="cart-item" key={index}>
                                          <div className="content" style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                          }}>
                                                <img src={item.thumbnails[0]} alt={item.title} style={{
                                                      width: "100px",
                                                      marginRight: "1rem",
                                                }} />
                                                <h4 style={{
                                                      marginRight: "2rem",
                                                }}>{item.title}</h4>
                                                <h5>{item.quantity} x ${item.price}</h5>
                                          </div>
                                    </div>
                              )
                        }) : <h4>Cart is empty</h4>}

                        {items.length > 0 && <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>}

                        <Link to={'/checkout'}>
                              <button>Checkout</button>
                        </Link>
                  </div>

            </>
      )
}

export default CartOverlay