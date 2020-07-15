import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {log} from "../../c0-debug/debug";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ContainerPropsType = DivPropsType & {
    direction?: "column" | "row"

    renderLog?: string
}

// flex container
const Container: React.FC<ContainerPropsType> = React.memo((
    {
        direction = "column",
        style,

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || `rendering container type ${direction}`);
    return (
        <div style={{display: "flex", flexFlow: direction, ...style}} {...restProps}/>
    );
});

export default Container;
