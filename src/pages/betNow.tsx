import React, { useState } from 'react';
import Link from 'next/link';

function betNow() {
    const [selectedHorse, setSelectedHorse] = useState<string | null>(null);
    const [betAmount, setBetAmount] = useState<string>('');

    const handleHorseSelect = (horseName: string) => {
        setSelectedHorse(horseName);
    };

    const handleBet = () => {
        // Handle the bet logic here
    };

    return (
        <div>
            {selectedHorse === null ? (
                <div>
                    <Link href="/dashboard">
                        <div className="items-center">
                        </div>
                    </Link>

                    <div onClick={() => handleHorseSelect('Feather')} className={selectedHorse === 'Feather' ? 'border-green-500' : ''}>
                        <img src="angela.png" alt="Feather" />
                    </div>
                    <div onClick={() => handleHorseSelect('Nightmare')} className={selectedHorse === 'Nightmare' ? 'border-green-500' : ''}>
                        <img src="nightmare.png" alt="Nightmare" />
                    </div>
                    <button onClick={handleBet}>Bet</button>
                </div>
            ) : (
                <div>
                    <img src={selectedHorse === 'Feather' ? 'angela.png' : 'nightmare.png'} alt={selectedHorse} />
                    <div>
                        <div>My Wallet</div>
                        <div>Current Balance: 821 SOL</div>
                        <input type="number" value={betAmount} onChange={(e) => setBetAmount(e.target.value)} />
                        <button onClick={handleBet}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default betNow;
