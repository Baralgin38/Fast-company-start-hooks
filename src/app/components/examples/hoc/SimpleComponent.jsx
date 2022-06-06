import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogIn, onLogOut }) => {
    const logInButton = (
        <button className="btn btn-primary" onClick={onLogIn}>
            Войти
        </button>
    );
    const logOutButton = (
        <button className="btn btn-secondary" onClick={onLogOut}>
            Выйти из системы
        </button>
    );

    return isAuth ? logOutButton : logInButton;
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
