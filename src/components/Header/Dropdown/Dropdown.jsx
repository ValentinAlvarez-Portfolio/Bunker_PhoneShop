import React, { useState } from 'react';
import { Menu, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

const Dropdown = (props) => {

      const theme = useTheme();

      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);

      const handleOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const styledDropdowns = {

            styledIconButtons: {
                  menuFilters: {
                        color: "white",
                        backgroundColor: theme.palette.primary.dark,
                        borderStartStartRadius: "5px",
                        borderEndStartRadius: "5px",
                        borderStartEndRadius: "0px",
                        borderEndEndRadius: "0px",
                        '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                        }
                  },
                  menuUsers: {

                        color: 'white',
                        backgroundColor: 'white',
                        '&:hover': {
                              backgroundColor: 'white'
                        }

                  },
                  navbar: {
                        color: "white",
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                        },
                        borderRadius: "0px",
                  }
            },
            styledMenu: {
                  menuFilters: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.dark,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                  },
                  navbar: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.main,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                  }
            },

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

      return (
            <>
                  {props.type === 'menuFilters' && (
                        <>
                              <IconButton
                                    id="filter-button"
                                    aria-controls={open ? 'filter-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpen}
                                    sx={styledDropdowns.styledIconButtons.menuFilters}
                              >
                                    <Typography fontFamily={"semiBold"} sx={{ color: "white", fontSize: theme.typography.fontSize.md }}>Filtros
                                    </Typography>      <ArrowDropDownIcon />
                              </IconButton>

                        </>
                  )}

                  {props.type === 'menuUsers' && (
                        <>
                              <IconButton
                                    id="filter-button"
                                    aria-controls={open ? 'filter-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpen}
                                    sx={styledDropdowns.styledIconButtons.menuUsers}
                              >
                                    <PersonIcon sx={styledDropdowns.styledPersonIcon} />
                              </IconButton>
                        </>
                  )}

                  {props.type === 'navbar' &&
                        (
                              <IconButton
                                    id="navbar-button"
                                    aria-controls={open ? 'navbar-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpen}
                                    sx={styledDropdowns.styledIconButtons.navbar}
                              >
                                    <MenuIcon sx={{
                                          fontSize: theme.icons.sizes.md,
                                    }} />
                              </IconButton>
                        )}



                  <Menu
                        id={props.type === 'menuFilters' ? 'menu' : 'navbar-menu'}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                              'aria-labelledby': props.type === 'menuFilters' ? 'menu-button' : 'navbar-button',
                        }}
                        sx={{
                              ...styledDropdowns.styledMenu[props.type],
                              '& .MuiList-padding': {
                                    paddingTop: 0,
                                    paddingBottom: 0,
                              },
                        }}
                  >

                        {props.children}
                  </Menu>
            </>
      );
};

export default Dropdown;
