import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <div className="dashboard p-8 bg-gray-100 flex flex-col items-center space-y-8">
      {/* Wallet Section */}
      <section className="wallet-section w-full max-w-xl bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl mb-4 font-semibold">My Wallet</h2>
        
        <div className="balance-card bg-white p-4 rounded-md shadow-md mb-4">
          <div className="balance font-medium">
            Current Balance: <span className="text-black-500">821 USDC (+18.50)</span>
          </div>
        </div>
        
        <div className="stats flex justify-between">
          <div className="win text-green-500">Total Win: 368 USDC</div>
          <img src="/up.png" alt="Up" className="w-8 h-8" />
          <div className="loss text-red-500">Total Loss: 188 USDC</div>
        </div>
        
        <button className="top-up-btn mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
          Top up wallet
        </button>
      </section>

      {/* Tabs */}
      <div className="tabs w-full max-w-xl flex justify-between mb-4 space-x-2">
        <Button>Horse Racing</Button>
        <Button>Formula 1</Button>
        <Button>Football</Button>
      </div>

      {/* Today's Matches */}
      <section className="matches w-full max-w-4xl bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Today's Matches</h2>
          <img src="/search.png" alt="Search Calendar" className="w-6 h-6" />
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">Sunday 15 October 2023</p>
          
          <div className="create-bet-card bg-white p-4 rounded-md shadow-md">
            <Link href="/createBet">
              <div className="items-center cursor-pointer">
                <p className="text-xl font-bold ml-2 nav-text pl-2 z-10">Create Bet</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between space-x-4">
          <img src="/horserace1.png" alt="Nigata race" className="match-img w-1/2 rounded-md transition-transform duration-300 hover:scale-105"/>
          <img src="/horserace2.png" alt="York race" className="match-img w-1/2 rounded-md transition-transform duration-300 hover:scale-105"/>
        </div>
      </section>

      {/* Race Horses */}
      <section className="horses w-full max-w-4xl flex justify-between space-x-4">
        <div className="horse-card text-center w-1/4 font-bold">
          <img src="/feather.png" alt="Feather" className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md" />
          Feather
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img src="/angela.png" alt="Angel" className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md" />
          Angel
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img src="/nightmare.png" alt="Nightmare" className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md" />
          Nightmare
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img src="/thetank.png" alt="The Tank" className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md" />
          "The Tank"
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
