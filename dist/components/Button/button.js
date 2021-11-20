/*
 * @Description:
 * @Author: ywj
 * @Date: 2021-11-15 17:08:08
 */
import React from 'react';
import classNames from 'classnames';
export const Button = (props) => {
    const { btnType, className, disabled, size, children, href, ...restProps } = props;
    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    });
    if (btnType === 'link' && href) {
        return (React.createElement("a", { className: classes, href: href, ...restProps }, children));
    }
    else {
        return (React.createElement("button", { className: classes, disabled: disabled, ...restProps }, children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};
export default Button;
