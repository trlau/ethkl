import React, { ReactNode } from "react";
import PropTypes from "prop-types";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="border-2 mb-3 border-green-500 text-black hover:bg-green-500 hover:text-gray-500 transition duration-300 ease-in-out py-2 px-4 rounded-lg w-48"
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;