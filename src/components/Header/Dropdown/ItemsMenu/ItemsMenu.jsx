import React, { useContext } from 'react'
import Dropdown from '../Dropdown.jsx'
import { Box, MenuItem, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../../context/LoginContext/LoginContext.jsx'


const ItemsMenu = (props) => {

      const { logout, isAuthenticated } = useContext(LoginContext)

      const theme = useTheme();

      const styledMenuItems = {

            backgroundColor: theme.palette.primary.dark,
            margin: 0,
            '&:hover': {
                  backgroundColor: theme.palette.primary.main,
            },
            color: "white",
            fontSize: theme.typography.fontSize.md,
            fontFamily: theme.typography.fontFamily.semiBold,

            styledPersonIcon: {
                  color: theme.palette.primary.main,
                  marginRight: "0.1rem",
                  fontSize: theme.icons.sizes.xxl,
                  ":hover": {
                        color: theme.palette.primary.dark,
                        cursor: "pointer",
                  }
            }

      }

      const ItemsFilters = () => {

            return (
                  < Dropdown type={"menuFilters"} >
                        <MenuItem key="cel" sx={styledMenuItems}>  Celulares </MenuItem>
                        <MenuItem key="acc" sx={styledMenuItems}>Accesorios </MenuItem>
                  </Dropdown>
            );

      }

      const ItemsUsers = () => {

            return (
                  <Dropdown type={"menuUsers"}>
                        {isAuthenticated ? (
                              <Box>
                                    <Link sx={{
                                          textDecoration: "none",
                                    }} to={'/profile'}>
                                          <MenuItem key="profile" sx={styledMenuItems} > Profile </MenuItem>
                                    </Link>
                                    <Link sx={{
                                          textDecoration: "none"
                                    }} onClick={logout} ><MenuItem key="logout" sx={styledMenuItems} > Logout </MenuItem></Link>
                              </Box>
                        ) : (
                              <Box>
                                    <Link sx={{
                                          textDecoration: "none",
                                    }} to={'/login'}>
                                          <MenuItem key="login" sx={styledMenuItems} > Login </MenuItem>
                                    </Link>
                              </Box>
                        )}



                  </Dropdown>

            )

      }


      return (

            <>
                  {props.type === "filters" ? <ItemsFilters /> : null}

                  {props.type === "users" ? <ItemsUsers /> : null}

            </>
      );
}

export default ItemsMenu