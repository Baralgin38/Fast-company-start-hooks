import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [state, setState] = useState("false");
    const handleClick = () => {
        setState((prevState) => (prevState === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevState.current = state;
    }, [state]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev state: {prevState.current}</p>
            <p>Current state: {state}</p>
            <button className="btn btn-primary" onClick={handleClick}>
                Сменить состояние
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
