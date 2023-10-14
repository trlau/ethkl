import React, { useState } from 'react';

interface Props {
    selectedHorse: {
        src: string;
        name: string;
    };
}

function BettingPage({ selectedHorse }: Props) {
    const [betAmount, setBetAmount] = useState(0);

    return (
        <div>
            <img src={selectedHorse.src} alt={selectedHorse.name} />
            <div className="mt-4">
                <label>My Wallet</label>
                <div>Current Balance: 821 SOL</div>
                <div>
                    Betting Amount:
                    <input
                        type="number"
                        value={betAmount}
                        onChange={(e) => setBetAmount(parseInt(e.target.value))}
                    /> SOL
                </div>
                <button className="mt-2">Confirm</button>
            </div>
        </div>
    );
}

export default BettingPage;
