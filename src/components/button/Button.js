import React, { Children } from 'react';
import styled from 'styled-components';

const theme = {
    pink: {
        default: '#A2275C',
        hover: '#8227A2',
        focus: '#8227A2',
        padding: '17px 26px;',
        boxShadowDefault: '4px 0px 0px 0px #802049, -4px 0px 0px 0px #E43A84, 0px  4px 0px 0px #802049, 0px -4px 0px 0px #E43A84;',
        boxShadowHover: '4px 0px 0px 0px #C23AE4, -4px 0px 0px 0px #5B2080, 0px  4px 0px 0px #C23AE4, 0px -4px 0px 0px #5B2080;',
        boxShadowFocus: '4px 0px 0px 0px #5B2080, -4px 0px 0px 0px #C23AE4, 0px  4px 0px 0px #5B2080, 0px -4px 0px 0px #C23AE4;'
    },
    purple: {
        default: '#783B88',
        hover: '#4F3B88',
        focus: '#4F3B88',
        padding: '17px 26px;',
        boxShadowDefault: '4px 0px 0px 0px #4F1959, -4px 0px 0px 0px #B06CC2, 0px  4px 0px 0px #4F1959, 0px -4px 0px 0px #B06CC2;',
        boxShadowHover: '4px 0px 0px 0px #321959, -4px 0px 0px 0px #7D6CC2, 0px  4px 0px 0px #321959, 0px -4px 0px 0px #7D6CC2;',
        boxShadowFocus: '4px 0px 0px 0px #7D6CC2, -4px 0px 0px 0px #321959, 0px  4px 0px 0px #7D6CC2, 0px -4px 0px 0px #321959;'
    },
    mint: {
        default: '#50C0AA',
        hover: '#5098C0',
        focus: '#5098C0',
        padding: '17px 26px;',
        boxShadowDefault: '4px 0px 0px 0px #277C6B, -4px 0px 0px 0px #6EE3CC, 0px  4px 0px 0px #277C6B, 0px -4px 0px 0px #6EE3CC;',
        boxShadowHover: '4px 0px 0px 0px #27587C, -4px 0px 0px 0px #6EC7E3, 0px  4px 0px 0px #27587C, 0px -4px 0px 0px #6EC7E3;',
        boxShadowFocus: '4px 0px 0px 0px #6EC7E3, -4px 0px 0px 0px #27587C, 0px  4px 0px 0px #6EC7E3, 0px -4px 0px 0px #27587C;'
    },
    brown: {
        default: '#CEA173',
        hover: '#CE7E73;',
        focus: '#CE7E73;',
        padding: '17px 26px;',
        boxShadowDefault: '4px 0px 0px 0px #966535, -4px 0px 0px 0px #F2D2B3, 0px  4px 0px 0px #966535, 0px -4px 0px 0px #F2D2B3;',
        boxShadowHover: '4px 0px 0px 0px #964735, -4px 0px 0px 0px #F2BEB3, 0px  4px 0px 0px #964735, 0px -4px 0px 0px #F2BEB3;',
        boxShadowFocus: '4px 0px 0px 0px #F2BEB3, -4px 0px 0px 0px #964735, 0px  4px 0px 0px #F2BEB3, 0px -4px 0px 0px #964735;'
    },
    icon: {
        default: '#A2275C',
        hover: '#8227A2',
        focus: '#8227A2',
        padding: '3px 3px;',
        boxShadowDefault: '3px 0px 0px 0px #802049, -3px 0px 0px 0px #E43A84, 0px  3px 0px 0px #802049, 0px -3px 0px 0px #E43A84;',
        boxShadowHover: '3px 0px 0px 0px #C23AE4, -3px 0px 0px 0px #5B2080, 0px  3px 0px 0px #C23AE4, 0px -3px 0px 0px #5B2080;',
        boxShadowFocus: '3px 0px 0px 0px #5B2080, -3px 0px 0px 0px #C23AE4, 0px  3px 0px 0px #5B2080, 0px -3px 0px 0px #C23AE4;'
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: #fff;
    padding: ${props => theme[props.theme].padding};
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    transition: ease all 0.3s;
    box-shadow: ${props => theme[props.theme].boxShadowDefault};
    margin: 0 20px 0 0;
    &:hover{
        background-color: ${props => theme[props.theme].hover};
        box-shadow: ${props => theme[props.theme].boxShadowHover};
    }
    &:focus{
        background-color: ${props => theme[props.theme].focus};
        box-shadow: ${props => theme[props.theme].boxShadowFocus};
    }
`   
Button.defaultProps = {
    theme : 'pink' | 'purple' | 'mint' | 'brown' | 'icon',
}

const Btn = (props) => {
    return(
        <>
            <Button theme={props.theme}>
                {props.children}
            </Button>
        </>
    )
}
export default Btn;