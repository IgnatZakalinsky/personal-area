import React from "react";
import {log} from "../../c0-debug/debug";
import s from "./CustomSpin.module.css";
import {Spin} from "antd";
import {SpinProps, SpinSize} from "antd/es/spin";

type CustomSpinPropsType = SpinProps & {

    renderLog?: string
}

const CustomSpin: React.FC<CustomSpinPropsType> = React.memo((
    {
        size = "large" as SpinSize,
        className,

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || "rendering Spin");
    return (
        <div className={className || s.base}>
            <Spin size={size} {...restProps}/>
        </div>
    );
});

export default CustomSpin;
