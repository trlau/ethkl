"use client";

import HoverCard from '../components/HoverCard';
import React, { useState } from "react";
import { useWalletAuth } from "../modules/wallet/hooks/useWalletAuth";
import ConnectWallet from "../components/ConnectWallet";
import { Transaction } from "../components/Transactions";
import Confetti from "react-confetti";
import { useWindowSize } from "../lib/ui/hooks/useWindowSize";

export default function Home() {
    const { isConnecting, isConnected, connect, connectionError, wallet } = useWalletAuth();
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const [transactionSuccess, setTransactionSuccess] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center space-y-6">
                <HoverCard>
                    <div>
                        <img
                            src="/fingerprint.png"
                            alt="Fingerprint"
                            className="transition-all duration-300"
                        />
                    </div>
                </HoverCard>

                <h1 className="text-4xl font-bold">Please Scan your Fingerprint</h1>
            </div>
            
            {transactionSuccess && (
                <Confetti width={windowWidth} height={windowHeight} />
            )}

            <div className="mt-4">
                <div className="md:min-h-[70vh] gap-2 flex flex-col justify-center items-center">
                    <div className="z-10 mt-5 flex w-screen max-w-max">
                        <div className="mx-auto w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="grid divide-gray-900/5 bg-gray-50">
                                <ConnectWallet
                                    isConnected={isConnected}
                                    isConnecting={isConnecting}
                                    connect={connect}
                                    connectionError={connectionError}
                                    wallet={wallet!}
                                />
                            </div>

                            {isConnected && (
                                <Transaction
                                    transactionSuccess={transactionSuccess}
                                    setTransactionSuccess={setTransactionSuccess}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
