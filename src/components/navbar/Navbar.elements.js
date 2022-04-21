import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 82px;
    padding-top: 20px;

`


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1118px){
        margin-left: 10px;
    }
    @media screen and (max-width: 765px){
        margin-left: -3px;
    }
`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 99998;
    @media screen and (max-width: 765px){
        background-color: #000B2C;
        position: fixed;
        opacity: 1;
        top: 0;
        left: ${({open}) => (open ? "0" : "-100%")};
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`

export const MenuItem = styled.li`
    height: 100%;
    font-family: 'Press Start 2P', cursive;
    @media screen and (max-width: 765px){
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
`


export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s all ease;
    color: #fff;
    &:hover{
        color: #A2275C;
    }
    @media screen and (max-width: 765px){
        color: #fff;
    }
    @media screen and (max-width: 1118px){
        font-size: 15px;
    }
    @media screen and (max-width: 765px){
        width: 100%;
    }
`
export const Social = styled.div`
    margin-left: 330px;
    @media screen and (max-width: 1118px){
        margin-left: 130px;
    }
    @media screen and (max-width: 870px){
        margin-left: 50px;
    }    @media screen and (max-width: 765px){
        margin: 0px;
    }
    @media screen and (max-width: 765px){
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 765px){
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        svg{
            position: fixed;
            right: 10px;
            z-index: 99999;
            fill: #A2275C;
            margin-right: 0.5rem;
            width: 25px;
            height: 25px;
        }
    }
`
export const mobileLogo = styled.div`
    display: none;
    @media screen and (max-width: 765px){
        display: flex;
    }
`

export const BtnWrapper = styled.div`

`