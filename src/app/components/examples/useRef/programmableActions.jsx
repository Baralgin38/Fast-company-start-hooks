import React, { useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const [widthStandart, setWidthStandart] = useState(true);

    const inputRef = useRef();

    const handleClickFocus = () => {
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        if (widthStandart) {
            inputRef.current.style.width = "150px";
            setWidthStandart((prevState) => !prevState);
        } else {
            inputRef.current.style.width = "100%";
            setWidthStandart((prevState) => !prevState);
        }
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                id="email"
                className="form-control"
            />
            <button className="btn btn-primary m-1" onClick={handleClickFocus}>
                Focus
            </button>
            <button
                className="btn btn-secondary m-1"
                onClick={handleClickWidth}
            >
                Change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
