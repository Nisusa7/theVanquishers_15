import React from 'react'
import AppBar from '@mui/material/AppBar/AppBar'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import { styled } from '@mui/material/styles'
import logo3 from './images/logo3.png'
import { Box, Typography } from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import About from './About'
import { useState } from "react";



const StyledHeader = styled(AppBar)`
  background: #000000;
  height: 100px;
`
const Component = styled(Box)`
  margin-left: 14%;
`
const Navbar = styled(Box)`
  display: flex;
  margin-left: 20px;
`

const NavbarLinks = styled(Typography)`
  color:#fff;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'Source Serif Pro', serif;
  font-weight: bold;
  cursor:pointer;
  
`

const Header = () => {

  
  return (
    <StyledHeader>
      <Toolbar>
        <Navbar>
          <NavbarLinks>Home</NavbarLinks>
          <NavbarLinks> About Us</NavbarLinks>
          <NavbarLinks>Become A Seller</NavbarLinks>
          <NavbarLinks>Contact Us</NavbarLinks>
        </Navbar>
        <Component>
          <img src={logo3} alt="logo" width="190px" />
        </Component>
        <Search />
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  )
}
export default Header;
