import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const classes = cn(styles.Button, className, { active });

  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default Button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;
