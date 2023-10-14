import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard p-8 bg-gray-100 flex flex-col items-center space-y-8">
      {/* Wallet Section */}
      <section className="wallet-section w-full max-w-xl bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl mb-4 font-semibold">My Wallet</h2>
        <div className="balance mb-4 font-medium">
          Current Balance:{" "}
          <span className="text-black-500">821 SOL (+18.50)</span>
        </div>
        <div className="stats flex justify-between">
          <div className="win text-green-500">Total Win: 368 SOL</div>
          <img src="/up.png" alt="Up" className="w-8 h-8"/>
          <div className="loss text-red-500">Total Loss: 188 SOL</div>
        </div>
        <button className="top-up-btn mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
          Top up wallet
        </button>
      </section>

      {/* Tabs */}
      <div className="tabs w-full max-w-xl flex justify-between mb-4 space-x-2">
        <button className="tab flex-1 px-4 py-2 bg-white rounded-md shadow-md text-center">
          Horse Racing
        </button>
        <button className="tab flex-1 px-4 py-2 bg-white rounded-md shadow-md text-center">
          Formula 1
        </button>
        <button className="tab flex-1 px-4 py-2 bg-white rounded-md shadow-md text-center">
          Football
        </button>
      </div>

      {/* Today's Matches */}
      <section className="matches w-full max-w-4xl bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Today's Matches</h2>
          <img src="/search.png" alt="Search Calendar" className="w-6 h-6"/>
        </div>
        <p className="mb-4">Sunday 15 October 2023</p>
        <div className="flex justify-between space-x-4">
          <img src="/horserace1.png" alt="Nigata race" className="match-img w-1/2 rounded-md transition-transform duration-300 hover:scale-105"/>
          <img src="/horserace2.png" alt="York race" className="match-img w-1/2 rounded-md transition-transform duration-300 hover:scale-105"/>
        </div>
      </section>

      {/* Race Horses */}
      <section className="horses w-full max-w-4xl flex justify-between space-x-4">
        <div className="horse-card text-center w-1/4 font-bold">
          <img
            src="/feather.png"
            alt="Feather"
            className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md"
          />
          Feather
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img
            src="/angel.png"
            alt="Angel"
            className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md"
          />
          Angel
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img
            src="/nightmare.png"
            alt="Nightmare"
            className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md"
          />
          Nightmare
        </div>
        <div className="horse-card text-center w-1/4 font-bold">
          <img
            src="/thetank.png"
            alt="The Tank"
            className="horse-img w-32 h-32 mx-auto mb-2 transition-transform duration-300 hover:scale-105 rounded-md"
          />
          "The Tank"
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
