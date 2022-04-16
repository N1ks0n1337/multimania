import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 82px;
    margin-top: 20px;
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
`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const MenuItem = styled.li`
    height: 100%;
    font-family: 'Press Start 2P', cursive;
`

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s all ease;
    &:hover{
        color: #A2275C;
    }
    @media screen and (max-width: 1118px){
        font-size: 15px;
    }
`
export const Social = styled.div`
    margin-left: 330px;
    @media screen and (max-width: 1118px){
        margin-left: 130px;
    }
    @media screen and (max-width: 870px){
        margin-left: 50px;
    }
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg{
            fill: #000;
            margin-right: 0.5rem;
        }
    }
`