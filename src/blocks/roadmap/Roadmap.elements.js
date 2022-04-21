import styled from "styled-components";
import BorderImg from './border.png'
import IconBack from '../../image/IconBack.png'

export const Container = styled.div`
    width: 100%;
    background-color: #100A1E;
    padding-top: 78px;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1350px;
    margin: auto;
`
export const CoinImg = styled.img`
    width: 20px;
    margin-right: 15px;
    @media screen and (max-width: 1325px){
        margin-right: 10px;
    }
`
export const BlocksWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 60px;
@media(max-width: 916px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export const BlockWrapper = styled.div`
    width: 40%;
    height: 30%;
    margin-right: 20px;
    margin-bottom: 80px;
    border: solid;
    border-image-source: url(${BorderImg});
    border-image-slice: 55%;
    border-image-width: 100%;
    :nth-child(2){
        margin-top: 250px;
    }
    :nth-child(3){
        margin-top: -250px;
    }
    @media(max-width: 1150px){
        :nth-child(2){
        margin-top: 0px;
    }
    :nth-child(3){
        margin-top: 0px;
    }
    @media(max-width: 916px){
        width: 70%;
        border-image-slice: 85%;
        margin-right: 0px;
}
@media(max-width: 593px){
        width: 95%;
        border-image-slice: 92%;
}
}
    
`

export const BlockDescr = styled.div`
    margin: 50px ;

`
export const Rectangle = styled.div`
    position: relative;
    z-index: 0;
    @media(max-width: 1299px){
        display: none;
    }
    @media(max-width: 765px){
        position: static;  
    }

`
export const RectangleImg = styled.img`
    position: absolute;
    left: 513px;
    top: -49px;
    z-index: 0;
    width: 50px;
    height: 50px;
`
export const RectangleBottom = styled.div`
    position: relative;
    z-index: 0;
    @media(max-width: 1299px){
        display: none;
    }
    @media(max-width: 765px){
        position: static;  
    }

`
export const RectangleImgBottom = styled.img`
    position: absolute;
    left: 520px;
    top: -8px;
    z-index: 0;
    width: 40px;
    height: 30px;
`
export const TitleWrapper = styled.div`

`

export const BlockDescrTitle = styled.div`
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px -5px 0px #A2275C;
    display: flex;
    align-items: center;
    @media(max-width: 1150px){
        font-size: 20px;
}
    @media(max-width: 542px){
        flex-direction: column;
    }
@media(max-width: 916px){
    font-size: 30px;
}
@media(max-width: 916px){
    font-size: 20px;
}
`

export const BlockDescrIcon = styled.img`
    width: 200px;
`

export const BlockDescrItems = styled.ul`
    margin-top: 25px;
`
export const BlockDescrItem = styled.li`
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    @media(max-width: 1150px){
        font-size: 20px;
}
@media(max-width: 916px){
    font-size: 25px;
}
@media(max-width: 593px){
    font-size: 19px;
}
    
`
export const IconItem = styled.img`
    margin-right: 30px;
    width: 65px;

    margin: 27px;

`
export const BackIcon = styled.div`
    background: url('${IconBack}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px;
    width: 120px;
    height: 120px;
`
