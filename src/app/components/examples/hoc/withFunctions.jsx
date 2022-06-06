import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const onLogIn = () => {
        localStorage.setItem("auth", "true");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <Card>
            <Component
                {...props}
                isAuth={isAuth}
                onLogIn={onLogIn}
                onLogOut={onLogOut}
            />
        </Card>
    );
};

export default withFunctions;
