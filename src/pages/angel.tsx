import React from "react";
import { useState } from "react";
import { useWalletAuth } from "../modules/wallet/hooks/useWalletAuth";
import ConnectWallet from "../components/ConnectWallet";
import { Transaction } from "../components/Transactions";
import Confetti from "react-confetti";
import { useWindowSize } from "../lib/ui/hooks/useWindowSize";

const BettingPage: React.FC = () => {
  const { isConnecting, isConnected, connect, connectionError, wallet } =
    useWalletAuth();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [betAmount, setBetAmount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">How much are you betting?</h1>

      <div className="flex">
        <div className="mr-10">
          <img src="angela.png" alt="Angela" className="w-48 h-48" />
          <p className="text-center mt-4 text-xl">Angel</p>
        </div>

        <div className="flex flex-col border p-6 rounded-lg bg-white shadow-lg">
          <h2 className="text-xl font-semibold mb-4">My Wallet</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Current Balance
            </label>
            <p className="border p-2 rounded">821 USDC</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Betting Amount
            </label>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="border p-2 rounded w-full"
              placeholder="Enter amount"
            />
          </div>

          <div className="md:min-h-[70vh] gap-2 flex flex-col justify-center items-center">
            <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="grid divide-gray-900/5 bg-gray-50"></div>
                <button className="bg-green-500 text-white rounded p-2 w-full hover:bg-green-600">
                  <ConnectWallet
                    isConnected={isConnected}
                    isConnecting={isConnecting}
                    connect={connect}
                    connectionError={connectionError}
                    wallet={wallet!}
                  />
                </button>
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
    </div>
  );
};

export default BettingPage;
