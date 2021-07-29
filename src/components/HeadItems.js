import React from 'react';
import { Link } from 'react-router-dom';


function HeadItems(props) {
    return (
        <li className='header__item'>
            <Link className='header__item__link' to={props.path}>
                <figure className='header__item__pic__wrap' data-catagory=
                {props.label}>
                   <img src={props.src} alt='egov-logo'
                   className='header__item__img' />
                </figure>

            </Link>
        </li>
    )
}

export default HeadItems;
