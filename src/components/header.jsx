import React from 'react';
import imgHero from '../images/image-hero-desktop.jpg';
import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header>
            <div className={'header'}>
                <div className={'navbar'}>
                    <div className={'navbar__left'}>
                        <img src={logo} className={'navbar__item'} alt={'title'}/>
                    </div>
                    <div className={'navbar__right'}>
                        <div className={'navbar__item'}>
                            About
                        </div>
                        <div className={'navbar__item'}>
                            Discover
                        </div>
                        <div className={'navbar__item'}>
                            Get Started
                        </div>
                    </div>

                </div>
                <img src={imgHero} alt=""/>
            </div>
        </header>
    );
};

export default Header;