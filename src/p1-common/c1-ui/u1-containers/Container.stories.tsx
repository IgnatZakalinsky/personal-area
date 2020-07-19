import React from "react";
import "antd/dist/antd.css"; // antd, must be first
import Container from "./Container";
import s from "./Container.module.css";

export default {
    title: "S3_Container",
    component: Container,
};

export const DefaultColumn = () => {
    return (
        <Container>
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
        </Container>
    )
};
export const Row = () => {
    return (
        <Container direction={"row"}>
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
        </Container>
    )
};
export const ColumnRevers = () => {
    return (
        <Container className={s.testFlexDirection}>
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
        </Container>
    )
};
