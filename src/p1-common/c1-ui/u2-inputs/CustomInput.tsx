import React from "react";
import {log} from "../../c0-debug/debug";
import {Input} from "antd";
import {InputProps} from "antd/es/input";
import s from "./CustomInput.module.css";

type CustomInputPropsType = InputProps & {

    renderLog?: string
}

const CustomInput: React.FC<CustomInputPropsType> = React.memo((
    {
        className,

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || `rendering Input`);
    return (
        <Input className={`${s.base} ${className}`} {...restProps}/>
    );
});

export default CustomInput;
