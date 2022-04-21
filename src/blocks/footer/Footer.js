import React from 'react'
import Btn from '../../components/button/Button';
import { Container, FooterLogo ,BtnWrapper ,FooterMenuItem, FooterMenuItems, SubMenuItem, SubMenuItems, Wrapper,SubMenuWrapper, FooterIcon, FooterLogoImg  } from './Footer.elements';
import Sea from '../../image/icon/sea.png'
import Discord from '../../image/icon/discord.png'
import Twitter from '../../image/icon/twitter.png'
import Logo from '../../image/icon/logo.png'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterMenuItems data-aos="fade-up">
          <FooterMenuItem>About</FooterMenuItem>
          <FooterMenuItem>Roadmap</FooterMenuItem>
          <FooterMenuItem>Mint</FooterMenuItem>
          <FooterMenuItem>Claim free NFT</FooterMenuItem>
          <FooterMenuItem>Read Whitepaper</FooterMenuItem>
        </FooterMenuItems>
        <SubMenuWrapper data-aos="fade-up">
        <SubMenuItems>
          <SubMenuItem>Terms and Conditions</SubMenuItem>
          <SubMenuItem>Terms of Service (P&K)</SubMenuItem>
        </SubMenuItems>
        </SubMenuWrapper>
        <FooterIcon data-aos="fade-up">
          <BtnWrapper><Btn theme='icon'><img style={{width : '22px'}} src={Sea}/></Btn></BtnWrapper>
          <BtnWrapper><Btn theme='icon'><img style={{width : '22px'}} src={Twitter}/></Btn></BtnWrapper>
          <BtnWrapper><Btn theme='icon'><img style={{width : '22px'}} src={Discord}/></Btn></BtnWrapper>
        </FooterIcon>
        <FooterLogo data-aos="fade-up">
        <FooterLogoImg src={Logo}/>
        </FooterLogo>
      </Wrapper>
    </Container>
  )
}

export default Footer