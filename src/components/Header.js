import React from 'react';
import './Header.css';
import HeadItem from './HeadItems';

function Header() {
    return(
        <>
        <div className='Header'>
            <div className='header__container'>
                <div className='header__wrapper'>
                <ul className='header__item_1'>
                        <HeadItem 
                        src='images/corp.png'
                        
                        />
                    </ul>
                    <ul className='header__item_2 '>
                        <HeadItem 
                        src='images/egov.png'
                        />
                    </ul>
                    <ul className='header__item_3'>
                        <HeadItem
                        src='images/digit_dcr.png'
                        />
                        
                    </ul>
                    <ul className='header__item_4'>
                        <HeadItem
                        src='images/suvega.png'
                        />
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;