import React from 'react';

const SecondItem = () => {
    return (
        <div className={'mainBlock'}>
            <div className={'croudStats'}>
                <div className={'croudStats__item'}>
                    <h2 className={'croudStats__item--head'}>
                        $89,914
                    </h2>
                    <p className={'croudStats__item--body'}>of $100,000 backed</p>
                </div>
                <div className={'croudStats__item'}>
                    <h2 className={'croudStats__item--head'}>
                        5,007
                    </h2>
                    <p className={'croudStats__item--body'}>total backed</p>
                </div>
                <div className={'croudStats__item'}>
                    <h2 className={'croudStats__item--head'}>
                        56
                    </h2>
                    <p className={'croudStats__item--body'}>days left</p>
                </div>
            </div>
            <div className={'croudProgress'}/>
        </div>
    );
};

export default SecondItem;