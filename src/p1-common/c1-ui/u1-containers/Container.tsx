import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {log} from "../../c0-debug/debug";
import s from "./Container.module.css";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ContainerPropsType = DivPropsType & {
    direction?: "column" | "row"

    renderLog?: string
}

// flex container
const Container: React.FC<ContainerPropsType> = React.memo((
    {
        direction = "column",
        className,

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || `rendering container type ${direction}`);
    return (
        <div className={className || s[direction]} {...restProps}/>
    );
});

export default Container;
