import React from "react";
import CardWrapper from "../../common/Card";

const withPropsAndStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="New name" />
        </CardWrapper>
    );
};

export default withPropsAndStyles;
