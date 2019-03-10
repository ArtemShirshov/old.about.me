// @flow
import React, {type Node} from 'react';
import {Link} from '@reach/router';

import s from './header.scss'

/**
 * Brands gallery component
 * @returns {Node} - rendered Brands gallery component
 */
export const Header = (): Node => (
    <div className={s.header}>
        <Link to='/' className={s.logo}>About.me</Link>

        <nav className={s.menu}>
            <Link to='/' className={s.link}>Home</Link>
            <Link to='/profile' className={s.link}>Profile</Link>
        </nav>
    </div>
);
