import React from 'react'
import BtnNFT from '../../components/button/ButtomNft'
import Btn from '../../components/button/Button'
import BtnMint from '../../components/button/ButtonMint'
import Navbar from '../../components/navbar/Navbar'
import SubTitle from '../../components/subTitle/SubTitle'
import Title from '../../components/title/Title'
import background from './backgroundHeader.png'
import './header.css'
import styled, {keyframes} from 'styled-components'




const HeaderItem = styled.div`
    @media(max-width: 765px) {
    margin: 10px;
}
`

function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'contain', width: '100%', overflow: 'hidden'}} className='header'>
        <Navbar/>
        <div className="header__container">
        <div data-aos="zoom-in" className="header__btn-group">
          <HeaderItem>
          <BtnNFT className='text'>Claim free NFT</BtnNFT>
          </HeaderItem>
          <HeaderItem>
           <BtnMint className='text'>Mint</BtnMint>
          </HeaderItem>
          <HeaderItem>
          <Btn className='text' theme ='purple'>Read Whitepaper</Btn>
          </HeaderItem>
        </div>
        </div>
    </header>
  )
}

export default Header