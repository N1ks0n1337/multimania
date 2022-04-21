import React from 'react'
import Title from '../../components/title/Title'
import FirstHero from '../../image/collectibles/firsthero.png'
import SecHero from '../../image/collectibles/sechero.png'
import ThHero from '../../image/collectibles/thhero.png'
import FrHero from '../../image/collectibles/frhero.png'
import FifHero from '../../image/collectibles/fifhero.png'
import SixHero from '../../image/collectibles/sixhero.png'
import SevHero from '../../image/collectibles/sevhero.png'
import EigHero from '../../image/collectibles/eighero.png'
import NinHero from '../../image/collectibles/ninhero.png'
import TenHero from '../../image/collectibles/tenhero.png'
import { Container, Wrapper, CollectiblesItems, CollectiblesItemImg, CollectiblesImg } from './Collectibles.elements'

const Collectibles = () => {
  return (
      <Container>
        <Wrapper>
          <Title> Collectibles </Title>
            <CollectiblesItems>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={FirstHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={SecHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={ThHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={FrHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={FifHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={SixHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={SevHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={EigHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={NinHero}/>
              </CollectiblesItemImg>
              <CollectiblesItemImg data-aos="zoom-in-up">
                <CollectiblesImg src={TenHero}/>
              </CollectiblesItemImg>              
            </CollectiblesItems>
        </Wrapper>
      </Container>
  )
}

export default Collectibles