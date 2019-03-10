// @flow
import React, {type Node} from 'react';

import s from './button.scss'

/**
 * Brands gallery component
 * @returns {Node} - rendered Brands gallery component
 */
export const Button = ({children}): Node => (
    <button className={s.button}>{children}</button>
);
