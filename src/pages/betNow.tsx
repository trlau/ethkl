import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

const BetNow: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-4 mt-10">
            <h1 className="text-2xl font-bold mb-4">Who will win at Nigata, 11:35?</h1>
            
            <div className="flex space-x-4">
                <Link href="/angel">
                    <div className="border-2 border-transparent p-2 cursor-pointer hover:border-green-500">
                        <img src="angela.png" alt="Angela" className="w-48 h-48"/>
                        <p className="text-center mt-2">Angela</p>
                    </div>
                </Link>
                
                <div className="border-2 border-transparent p-2">
                    <img src="nightmare.png" alt="Nightmare" className="w-48 h-48"/>
                    <p className="text-center mt-2">Nightmare</p>
                </div>
            </div>
            
            <div className="mt-4">
                <Link href="/angel">
                    <Button>
                        Bet
                    </Button>
                </Link>
            </div>
            
            <div className="mt-4 text-black"> Don't see your horse here? </div>
            <div className="mt-4 text-green-500 underline cursor-pointer">
                <Link href="/dashboard">
                    <p>
                        Click here to check other betting proposals recommended for you.
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default BetNow;
