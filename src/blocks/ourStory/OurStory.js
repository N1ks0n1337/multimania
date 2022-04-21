import React from 'react'
import Title from '../../components/title/Title';
import { Container ,ImageStars, LeftStars, Text ,RightStars, TextContainer, TitleContainer, Wrapper, BackgroundImg} from './OurStory.elements';
import leftStars from '../../image/LeftStars.png';
import rightStars from '../../image/RightStars.png';

const OurStory = () => {
  return (
    
    <Container>
      <BackgroundImg>
        <Wrapper>
          <TitleContainer data-aos="zoom-in">
            <LeftStars>
              <ImageStars src={leftStars}/>
              </LeftStars>
            <Title>Our Story</Title>
            <RightStars>
              <ImageStars src={rightStars}/>
            </RightStars>
          </TitleContainer>
          <TextContainer>
              <Text data-aos="zoom-in">
              MultiMania: Beyond the Metaverse is more than just collectibles. It's a F2P/P2E platformer fighting game with unique concept of Multimetaverse and Nexus. The lord of all metaverses which name a simple human can not even understand created a space beyond the metaverse, called it Nexus - a place where fighter from all corners of the multimetaverse will fight each other in the tournament for the title of the greatest warrior in all of the multimetaverse!
              <br/>
              <br/>
              Can you beat your opponent? Even knowing it’s you from another reality?
              </Text>
          </TextContainer>
        </Wrapper>
        </BackgroundImg>
    </Container>
  )
}

export default OurStory;