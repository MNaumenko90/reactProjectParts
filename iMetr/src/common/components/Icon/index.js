/**
 * Created by aleksandr on 8/2/17.
 * moonion.com
 */

import React from 'react';
import classNames from 'classnames';

import {withStyles} from 'material-ui/styles';
import {capitalizeFirstLetter} from 'material-ui/utils/helpers';

import './assets/style.css';


export const styleSheet = theme => ({
    root: {
        userSelect: 'none',
    },
});

function Icon(props) {
    const {children, classes, className: classNameProp, color, ...other} = props;

    const className = classNames(
        'icon',
        `icon-${children}`,
        classes.root,
        {
            [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'inherit',
        },
        classNameProp,
    );

    return (
        <span className={className} aria-hidden="true" {...other}/>
    );
}

Icon.defaultProps = {
    color: 'inherit',
};

Icon.muiName = 'Icon';

export default withStyles(styleSheet)(Icon);
