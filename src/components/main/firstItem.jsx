import React from 'react';
import logo from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";

const FirstItem = () => {
    return (
        <div className={'mainBlock'}>
            <img className={'logo'} src={logo} alt="logo"/>
            <div className={'mainBlock__text'}>
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </div>
            <div className={'mainBlock__actions'}>
                <div className={'back'}>Back this project</div>
                <div className={'bookmark'}>
                    <img src={bookmark} alt=""/>
                    <div>Bookmark</div>
                </div>
            </div>
        </div>
    );
};

export default FirstItem;