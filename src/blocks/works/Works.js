import React from 'react'
import {BlockSlider ,BlockText ,BlockSliderImg ,BlockIcon ,BlockIconImg , Blocks, BlockWrapper, Container, Wrapper } from './Works.elements'
import Title from '../../components/title/Title'

const Works = () => {
  return (
    <Container>
      <Wrapper>
        <Title>How it works?</Title>
        <Blocks>

          <BlockWrapper>
              <BlockIcon>
                  <BlockIconImg></BlockIconImg>
                  <BlockIconImg></BlockIconImg>
              </BlockIcon>
              <BlockSlider>
                <BlockSliderImg/>
                <BlockSliderImg/>
              </BlockSlider>

              <BlockText>
              Your character look depends on his metadata. The game is completely free-to-play and don't needs you to mint NFT to play it. Each character has its own stats, weapon and unique features and animations detached from NFT. 
              </BlockText>
          </BlockWrapper>
        </Blocks>
      </Wrapper>
    </Container>
  )
}

export default Works