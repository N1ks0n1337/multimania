import React from 'react'
import Btn from '../button/Button'
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, Social, MobileIcon } from './Navbar.elements'
import Sea from '../../image/icon/sea.png'
import Discord from '../../image/icon/discord.png'
import Twitter from '../../image/icon/twitter.png'
import Logo from '../../image/icon/logo.png'

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Menu>
            <LogoContainer>
                <img src={Logo}/>
            </LogoContainer>
                <MenuItem>
                        <MenuItemLink>
                            About
                        </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        Roadmap
                    </MenuItemLink>
                </MenuItem>
                <Social>
                <MenuItem>
                    <MenuItemLink>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Sea}/></Btn>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Twitter}/></Btn>
                        <Btn theme='icon'><img style={{width : '22px'}} src={Discord}/></Btn>
                    </MenuItemLink>
                </MenuItem>
                </Social>
                <MenuItem>
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
