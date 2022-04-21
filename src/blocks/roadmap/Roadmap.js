import React from 'react'
import Title from '../../components/title/Title'
import {RectangleImgBottom ,RectangleBottom ,RectangleImg ,Rectangle,BackIcon ,BlocksWrapper ,IconItem, CoinImg ,TitleWrapper ,BlockDescrItem, BlockDescrItems, Container, Wrapper, BlockWrapper, BlockDescr, BlockDescrIcon, BlockDescrTitle } from './Roadmap.elements'
import coin from '../../image/Coin.png';
import Fire from '../../image/icon/FireIcon.png'
import Pika from '../../image/icon/pika.png'
import Wand from '../../image/icon/wand.png'
import Swort from '../../image/icon/swort.png'
import RectangleTop from '../../image/RectangleTop.png'
import RectangleBottomImg from '../../image/RectangleBottom.png'

const Roadmap = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Roadmap</Title>
        <BlocksWrapper data-aos="fade-right">
        <BlockWrapper >
          <BlockDescr>
            <TitleWrapper>
            <BlockDescrTitle><BackIcon><IconItem src={Fire}/></BackIcon>Q2 2022</BlockDescrTitle>
            </TitleWrapper>
            <BlockDescrItems>
              <BlockDescrItem><CoinImg src={coin}/>NFT Drop</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>NFT Emblem Drop</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Weapon NFT Drop</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Token</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>More NFT's</BlockDescrItem>
            </BlockDescrItems>
          </BlockDescr>   
          <Rectangle><RectangleImg src={RectangleTop}/></Rectangle>
        </BlockWrapper>
        <BlockWrapper >
          <BlockDescr>
            <TitleWrapper>
            <BlockDescrTitle><BackIcon><IconItem src={Swort}/></BackIcon>Q2 2022</BlockDescrTitle>
            </TitleWrapper>
            <BlockDescrItems>
              <BlockDescrItem><CoinImg src={coin}/>Gameplay preview</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Alpha Test</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>More NFT's</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Introduce rewards leaderboard</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Introduce daily quests</BlockDescrItem>
            </BlockDescrItems>
          </BlockDescr>   
        </BlockWrapper>
        <BlockWrapper>
        <RectangleBottom><RectangleImgBottom src={RectangleBottomImg}/></RectangleBottom>
          <BlockDescr>
            <TitleWrapper>
            <BlockDescrTitle><BackIcon><IconItem src={Pika}/></BackIcon>Q2 2022</BlockDescrTitle>
            </TitleWrapper>
            <BlockDescrItems>
              <BlockDescrItem><CoinImg src={coin}/>More NFT's</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Beta Test</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Launch Game</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Craft system </BlockDescrItem>
            </BlockDescrItems>
          </BlockDescr> 
          <Rectangle><RectangleImg src={RectangleTop}/></Rectangle>
  
        </BlockWrapper>
        <BlockWrapper>
          <BlockDescr>
            <TitleWrapper>
            <BlockDescrTitle><BackIcon><IconItem src={Wand}/></BackIcon>Q2 2022</BlockDescrTitle>
            </TitleWrapper>
            <BlockDescrItems>
              <BlockDescrItem><CoinImg src={coin}/>More NFT's</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Battle Pass</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Rating system</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Championship League</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Storymode trailer</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Map editor</BlockDescrItem>
              <BlockDescrItem><CoinImg src={coin}/>Balance optimisation</BlockDescrItem>
            </BlockDescrItems>
          </BlockDescr>   
        </BlockWrapper>
        </BlocksWrapper>
      </Wrapper>
      
    </Container>
  )
}

export default Roadmap