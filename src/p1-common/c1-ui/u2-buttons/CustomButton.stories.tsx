import React from "react";
import 'antd/dist/antd.css'; // antd, must be first
import {action} from "@storybook/addon-actions";
import CustomButton from "./CustomButton";

export default {
    title: "S1_CustomButton",
    component: CustomButton,
};

export const PrimaryAndAllProps = () => {
    return (
        <CustomButton
            onClick={action("click!")}
            draggable={"true"} // very interesting ))
            // disabled={true}
            // loading={true} // disabled and loading icon
            // loading={{delay: 3000}} // ? hz
            shape={"round"}
            // shape={"circle"}

            renderLog={"7 +-- rendering button"}
        >
            default is primary
        </CustomButton>
    )
};
export const Link = () => {
    return (
        <CustomButton
            type={"link"}

            renderLog={"7 +-- rendering button"}
        >
            link
        </CustomButton>
    )
};
export const Danger = () => {
    return (
        <CustomButton
            danger

            renderLog={"7 +-- rendering button"}
        >
            delete something :)
        </CustomButton>
    )
};
export const Disabled = () => {
    return (
        <CustomButton
            disabled
            onClick={action("click?")}

            renderLog={"7 +-- rendering button"}
        >
            disabled
        </CustomButton>
    )
};
