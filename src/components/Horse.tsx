import React from 'react';

interface HorseProps {
  src: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function Horse({ src, name, isSelected, onClick }: HorseProps) {
    return (
        <div onClick={onClick} className={`p-4 ${isSelected ? 'border-green-500 border-4' : ''}`}>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Horse;
