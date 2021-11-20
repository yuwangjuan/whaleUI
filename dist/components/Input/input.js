/*
 * @Description:
 * @Author: ywj
 * @Date: 2021-11-18 14:55:26
 */
import React from 'react';
import classNames from 'classnames';
export const Input = (props) => {
    const { disabled, size, 
    // icon,
    prepend, append, style, ...restProps } = props;
    const cnames = classNames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    });
    const fixControlledValue = (value) => {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    return (React.createElement("div", { className: cnames, style: style },
        prepend && React.createElement("div", { className: "viking-input-group-prepend" }, prepend),
        React.createElement("input", { className: "viking-input-inner", disabled: disabled, ...restProps }),
        append && React.createElement("div", { className: "viking-input-group-append" }, append)));
};
export default Input;
