import React, {useCallback, useState} from "react";
import s from "./App.module.css";
import 'antd/dist/antd.css'; // antd
import {log} from "../../../p1-common/c0-debug/debug";
import {Button} from "antd";
import Container from "../../../p1-common/c1-ui/u1-containers/Container";

const App = React.memo(() => {
    const [test, setTest] = useState<string>('x');
    const onClick = useCallback(() => setTest('test'), [setTest]);
    const [test2, setTest2] = useState<string>('x2');
    const onClick2 = useCallback(() => setTest2('test2'), [setTest2]);

    log("1 - rendering App");
    return (
        <div className={s.App}>
            <Container renderLog={"2 -- rendering column app div"}>
                <Button onClick={onClick}>{test}</Button>
                <Button onClick={onClick2}>{test2}</Button>


                it-incubator
            </Container>
        </div>
    );
});

export default App;
