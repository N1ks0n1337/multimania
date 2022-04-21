import styled from "styled-components";
import Border from '../../image/works/BorderImg.svg'

export const Container = styled.div`
    width: 100%;
    background-color: #1B0705;
    padding-top: 308px;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
`
export const Blocks = styled.div`
margin-top: 140px;
`
export const BlockWrapper = styled.div`
    border: solid;
    border-image-source: url(${Border});
    border-image-slice: 85%;
    border-image-width: 90%;
    padding: 50px;
    height: 350px;
`
export const BlockIcon = styled.div`

`
export const BlockIconImg = styled.img`
`
export const BlockText = styled.div`
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
`

export const BlockSlider = styled.div``

export const BlockSliderImg = styled.img``