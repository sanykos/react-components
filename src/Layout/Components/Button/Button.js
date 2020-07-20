import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import cls from './Button.module.css'


const Button = ({
    children, onClick, className, disabled, active
}) => {
    const classes = classNames(
        cls.Button,
        className,
        {active}
    )

   return (
       <button 
        className={classes}
        disabled={disabled}
        onClick={onClick}
   >{children}</button>
   )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
}

Button.defaultProps = {
    children: 'Default Button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false
}

export default Button