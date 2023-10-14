import React, { ReactNode } from "react";
import PropTypes from "prop-types";

type BlurCardProps = {
    children: ReactNode;
};

const BlurCard = ({ children }: BlurCardProps) => {
    return (
        <div className="relative">
            <div className="absolute w-96 h-96 bg-white bg-opacity-60 backdrop-blur-sm border-2 border-green-500 rounded-lg shadow-md p-4 mx-4 my-4 z-50 proposalCard">
                {children}
            </div>
        </div>
    );
};

BlurCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BlurCard;