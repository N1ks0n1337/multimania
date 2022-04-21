import React from 'react'
import Btn from '../button/Button'
import { Container, MenuItemContainer ,LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, Social, MobileIcon, BtnWrapper } from './Navbar.elements'
import Sea from '../../image/icon/sea.png'
import Discord from '../../image/icon/discord.png'
import Twitter from '../../image/icon/twitter.png'
import Logo from '../../image/icon/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react'


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Container>
        <Wrapper>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <Menu open={showMobileMenu}>
            <LogoContainer data-aos="fade-down">
                <img src={Logo}/>
            </LogoContainer>

                <MenuItem data-aos="fade-down">
                        <MenuItemLink>
                            About
                        </MenuItemLink>
                </MenuItem>
                <MenuItem data-aos="fade-down">
                    <MenuItemLink>
                        Roadmap
                    </MenuItemLink>
                </MenuItem>
                <Social>
                <MenuItem data-aos="fade-down">
                    <MenuItemLink>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Sea}/></Btn>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Twitter}/></Btn>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Discord}/></Btn>
                    </MenuItemLink>
                </MenuItem>
                </Social>
                <MenuItem data-aos="fade-down">
                <MenuItemLink>
                        <Btn theme='pink'>Connect Wallet</Btn>
                </MenuItemLink>
                </MenuItem>

            </Menu>
        </Wrapper>
    </Container>
  )
}

export default Navbar
