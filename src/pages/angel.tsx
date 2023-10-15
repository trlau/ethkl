import React, { useState } from 'react';

const BettingPage: React.FC = () => {
    const [betAmount, setBetAmount] = useState<number>(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">How much are you betting?</h1>
            
            <div className="flex">
                <div className="mr-10">
                    <img src="angela.png" alt="Angela" className="w-48 h-48" />
                    <p className="text-center mt-4 text-xl">Feather</p>
                </div>
                
                <div className="flex flex-col border p-6 rounded-lg bg-white shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">My Wallet</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Current Balance</label>
                        <p className="border p-2 rounded">821 USDC</p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Betting Amount</label>
                        <input 
                            type="number" 
                            value={betAmount} 
                            onChange={(e) => setBetAmount(Number(e.target.value))} 
                            className="border p-2 rounded w-full" 
                            placeholder="Enter amount" 
                        />
                    </div>

                    <button className="bg-green-500 text-white rounded p-2 w-full hover:bg-green-600">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BettingPage;
