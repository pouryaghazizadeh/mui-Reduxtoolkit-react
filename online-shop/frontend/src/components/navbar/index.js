import React from 'react'
import {
  Nav,
  TitleNav,
  BoxIconShope,
  ContainerIcon,
  NumberProduct,
} from "./view";
import {HiShoppingCart} from "react-icons/hi"
function Navbar() {
    return (
        <Nav>
            <TitleNav  to="/" >onlineShope</TitleNav>
            <ContainerIcon>
            <BoxIconShope to="/card">
                <HiShoppingCart/>
            </BoxIconShope>
            < NumberProduct>3</NumberProduct>

            </ContainerIcon>
            
        </Nav>
    )
}

export default Navbar
