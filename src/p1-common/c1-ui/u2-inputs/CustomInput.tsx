import React, {ChangeEvent, useCallback} from "react";
import {log} from "../../c0-debug/debug";
import {Input} from "antd";
import {InputProps} from "antd/es/input";
import s from "./CustomInput.module.css";

type CustomInputPropsType = InputProps & {
    onChangeText?: (value: string) => void

    renderLog?: string
}

const CustomInput: React.FC<CustomInputPropsType> = React.memo((
    {
        onChange,
        onChangeText,
        className,

        renderLog,
        ...restProps
    }
) => {
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value);
    }, [onChange, onChangeText]);

    log(renderLog || `rendering Input`);
    return (
        <Input onChange={onChangeCallback} className={className || s.base} {...restProps}/>
    );
});

export default CustomInput;
