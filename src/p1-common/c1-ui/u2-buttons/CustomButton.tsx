import React from "react";
import {log} from "../../c0-debug/debug";
import {Button} from "antd";
import {ButtonProps} from "antd/es/button";


type CustomButtonPropsType = ButtonProps & {

    renderLog?: string
}

const CustomButton: React.FC<CustomButtonPropsType> = React.memo((
    {

        renderLog,
        ...restProps
    }
) => {

    log(renderLog || `rendering Button`);
    return (
        <Button {...restProps}/>
    );
});

export default CustomButton;
