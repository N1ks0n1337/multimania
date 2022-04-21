import { Container, Wrapper, WrapperFighters, FighterBlockYang, FighterBlockLing, FighterBlockImgYang,FighterBlockImgLing, FighterBlockDiscription, FighterImg, FighterSupplyText,FighterDiscriptionText, FighterValue, FighterValueLi, CoinImg, BackgroundImg, KnowMore, ImgWrapper,KnowMoreImg, BtnWrapper, Button, BackgroundImgCity} from './Fighters.elements';
import yang from '../../image/Yang.png';
import ling from '../../image/Ling.png';
import coin from '../../image/Coin.png';
import Title from '../../components/title/Title';
import question from '../../image/Que.png';
import SubTitle from '../../components/subTitle/SubTitle'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Fighters = () => {
    return(
        <Container>
          <BackgroundImg>
            <Wrapper>
                <WrapperFighters>
                    <Title data-aos="zoom-in">Fighters</Title>
                    <FighterBlockYang>
                      <FighterBlockImgYang>
                        <FighterImg src={yang} data-aos="fade-right"/>
                      </FighterBlockImgYang>
                      <FighterBlockDiscription data-aos="fade-left">
                        <FighterSupplyText>Supply: 5000</FighterSupplyText>
                        <FighterDiscriptionText >
                        One of the first fighters in Nexus. Yang is a Chinese fighter from Shanghai who always wanted to be the best in each martial art. He is strong and fast enough to call himself a master. He has got a younger sister, Ling Ling, who hates him because he left dojo when she was young
                        </FighterDiscriptionText>
                        <FighterValue>
                          <FighterValueLi><CoinImg src={coin}/>yield 10 $MMMT everyday</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>get access to Ranked matchmaking</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have exclusive rights</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>rent it out to earn $MMMT and $NXE</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have an access to storymode</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>use it in craft or whatever you want (discord etc.)</FighterValueLi>
                        </FighterValue>
                      </FighterBlockDiscription>
                    </FighterBlockYang>
                    <FighterBlockLing>
                      <FighterBlockDiscription data-aos="fade-right">
                        <FighterSupplyText>Supply: 5000</FighterSupplyText>
                        <FighterDiscriptionText>
                        Second fighter entered Nexus. Ling Ling is a Yang’s younger sister. After he left dojo when Ling Ling was only 6 years old, she suffered in trainings of secretive kill martial art. She wants to get stronger only for one mission - revenge brother
                        </FighterDiscriptionText>
                        <FighterValue>
                          <FighterValueLi><CoinImg src={coin}/>yield 10 $MMMT everyday</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>get access to Ranked matchmaking</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have exclusive rights</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>rent it out to earn $MMMT and $NXE</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>have an access to storymode</FighterValueLi>
                          <FighterValueLi><CoinImg src={coin}/>use it in craft or whatever you want (discord etc.)</FighterValueLi>
                        </FighterValue>
                      </FighterBlockDiscription>
                      <FighterBlockImgLing>
                        <FighterImg src={ling} data-aos="fade-left" />
                      </FighterBlockImgLing>
                    </FighterBlockLing>
                </WrapperFighters>
                <KnowMore>
                  <ImgWrapper data-aos="fade-up">
                    <KnowMoreImg src={question}></KnowMoreImg>
                    <SubTitle>Want to know more?</SubTitle>
                  </ImgWrapper>
                  <BtnWrapper data-aos="fade-up">
                    <Button theme='pink'>Read Whitepaper</Button>
                  </BtnWrapper>
                </KnowMore>
              </Wrapper>
            </BackgroundImg>
            <BackgroundImgCity/>
        </Container>
    )
}

export default Fighters