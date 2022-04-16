import React from 'react';
import './header.css'
import Btn from '../button/Button';
import logo from '../../image/logo.png';
import sea from '../../image/icon/sea.png';
import discord from '../../image/icon/discord.png';
import twitter from '../../image/icon/twitter.png';



const Header = (props) => {
    return(
        <>
            <header className="header">
                <img src={logo}/>
                <div className="header__social">
                    <Btn className='texe' theme="icon"><img className='header__social-icon' src={sea}/></Btn>
                    <Btn className='texe' theme="icon"><img className='header__social-icon' src={twitter}/></Btn>
                    <Btn className='texe' theme="icon"><img className='header__social-icon' src={discord}/></Btn>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                    <Btn theme="">Connect Wallet</Btn>
            </header>
        </>
    )
}
export default Header;