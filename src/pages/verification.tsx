"use client";

import HoverCard from "../components/HoverCard";
import Link from "next/link";
import Button from "../components/Button";
import React, { useState } from "react";
import { useWalletAuth } from "../modules/wallet/hooks/useWalletAuth";
import ConnectWallet from "../components/ConnectWallet";
import { Transaction } from "../components/Transactions";
import Confetti from "react-confetti";
import { useWindowSize } from "../lib/ui/hooks/useWindowSize";

export default function Home() {
  const { isConnecting, isConnected, connect, connectionError, wallet } =
    useWalletAuth();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center h-auto justify-center h-screen bg-gray-100">
      <h1 className="msb-6 text-4xl mt-32 font-bold">
        Please Scan your Fingerprint
      </h1>
      <HoverCard>
        <div>
          <img
            src="/fingerprint.png"
            alt="Fingerprint"
            className="transition-all duration-300"
          />
        </div>
      </HoverCard>
      {transactionSuccess && (
        <Confetti width={windowWidth} height={windowHeight} />
      )}
      <div className="mt-4 text-center">
        <div className="md:min-h-[70vh] gap-2 flex flex-col justify-center items-center">
          <div className="absolute left-1/2 z-10 mt-5s flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
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
