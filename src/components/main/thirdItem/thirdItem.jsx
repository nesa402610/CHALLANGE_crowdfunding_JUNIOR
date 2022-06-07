import React from 'react';
import Block from "./block";

const ThirdItem = () => {
    return (
        <div className={'mainBlock'}>
            <h3>About this project</h3>
            <div className={'about'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae corporis doloremque
                   libero minima natus, necessitatibus quos reiciendis. Adipisci aliquid amet atque debitis ducimus
                   eveniet exercitationem laboriosam non officia suscipit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae corporis doloremque libero
                   minima natus</p>
            </div>
            <div className={'cards'}>
                <Block left={101}>
                <div className={'aboutBlock__head'}>
                    <h3>Bamboo Stand</h3>
                    <span>Pledge $25 or more</span>
                </div>
                <div className={'aboutBlock__desc'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore porro, qui. Delectus illum iste
                    itaque iure libero neque odio officiis porro provident sequi.
                </div>
            </Block>
                <Block left={64}>
                    <div className={'aboutBlock__head'}>
                        <h3>Black Edition Stand</h3>
                        <span>Pledge $75 or more</span>
                    </div>
                    <div className={'aboutBlock__desc'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore porro, qui. Delectus illum
                        iste
                        itaque iure libero neque odio officiis porro provident sequi.
                    </div>
                </Block>
                <Block left={0} btn={'Out of stock'}>
                    <div className={'aboutBlock__head'}>
                        <h3>Mahogany Special Edition</h3>
                        <span>Pledge $200 or more</span>
                    </div>
                    <div className={'aboutBlock__desc'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore porro, qui. Delectus illum
                        iste
                        itaque iure libero neque odio officiis porro provident sequi.
                    </div>
                </Block>
            </div>
        </div>
    );
};

export default ThirdItem;