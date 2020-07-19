import React, {ChangeEvent, useCallback} from "react";
import Log, {log} from "../../c0-debug/debug";
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

    return (
        <>
            <Log s={renderLog || "rendering Input"}/>
            <Input onChange={onChangeCallback} className={className || s.base} {...restProps}/>
        </>
    );
});

export default CustomInput;

// class input for fix antd form
export class ClassCustomInput extends React.PureComponent<CustomInputPropsType> {
    onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);
        this.props.onChangeText && this.props.onChangeText(e.currentTarget.value);
    };

    render() {
        const {onChangeText, onChange, renderLog, className, ...restProps} = this.props;

        log(renderLog || "rendering Input");
        return (
            <Input onChange={this.onChangeCallback} className={className || s.base} {...restProps}/>
        );
    }
}
