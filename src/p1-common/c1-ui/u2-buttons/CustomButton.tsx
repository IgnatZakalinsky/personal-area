import React from "react";
import {log} from "../../c0-debug/debug";
import {Button} from "antd";
import {ButtonProps} from "antd/es/button";
import {ButtonType} from "antd/lib/button/button";
import s from "./CustomButton.module.css";

type CustomButtonPropsType = ButtonProps & {

    renderLog?: string
}

const CustomButton: React.FC<CustomButtonPropsType> = React.memo((
    {
        type = "primary" as ButtonType,
        className,

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || `rendering Button`);
    return (
        <Button type={type} className={className || s.base} {...restProps}/>
    );
});

export default CustomButton;
