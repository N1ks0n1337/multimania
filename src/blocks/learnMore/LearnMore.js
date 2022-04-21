import React from 'react'
import {Title ,Container, Text, LearnItemRight, LearnItemLeft,LearnContainer, LearnItem, StarsRight, StarsLeft, Wrapper, BackgroundImgCity } from './LearnMore.elements'
import Btn from '../../components/button/Button'
import leftStars from '../../image/LeftStars.png';
import rightStars from '../../image/RightStars.png';

const LearnMore = () => {
  return (
    <Container>
      <Wrapper data-aos="fade-up"
     data-aos-anchor-placement="top-center">
         <Title>Learn more</Title>
         <LearnContainer >
           <LearnItemRight>
           <Text>Want to join us? Get in the Discord and be a part of our community!</Text>
           <StarsRight src={rightStars}/>
           </LearnItemRight>
           <LearnItemLeft>
             <StarsLeft src={leftStars}/>
             <Btn theme='pinkLearn'>Join Discord<br/> community</Btn>
            </LearnItemLeft>
         </LearnContainer>
      </Wrapper>
      <BackgroundImgCity/>
    </Container>
  )
}

export default LearnMore