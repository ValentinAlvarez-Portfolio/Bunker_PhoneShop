import React from 'react';
import { MenuItem, useTheme, IconButton, InputBase, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Dropdown from '../Dropdown.jsx';
import { Link } from 'react-router-dom';

const styledNavbarItems = (theme) => ({
      backgroundColor: theme.palette.primary.main,
      margin: 0,
      '&:hover': {
            backgroundColor: theme.palette.primary.dark,
      },
      color: "white",
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.bold,
});

const NavbarItem = ({ theme, children, ...props }) => (
      <MenuItem sx={styledNavbarItems(theme)} {...props}>
            {children}
      </MenuItem>
);


const ItemsNavbar = () => {

      const theme = useTheme();

      const categories = [
            { text: "Celulares", link: "/cellphones" },
            { text: "Accesorios", link: "/accessories" },
            { text: "Ofertas", link: "/offers" },
      ]

      return (
            <Dropdown type={"navbar"}>
                  {categories.map((category, index) => (
                        <NavbarItem component={Link} to={category.link} key={index} theme={theme}>{category.text}</NavbarItem>
                  ))}
            </Dropdown>
      );
}

export default ItemsNavbar;