import React from 'react';

interface HoverCardProps {
    children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ children }) => {
    return (
        <div 
            className="rounded-lg transition-all duration-300 p-6 mx-auto"
            style={{ width: '250px' }}
        >
            {children}
        </div>
    );
}

export default HoverCard;
