import React from 'react';
import Image from 'next/image';
import { useState } from "react";
import zkjom_contracts from "../../zkjom_contracts/build/main.aleo?raw";
import { AleoWorker } from "../workers/AleoWorker.js";


// Assuming you have a Button component in the components folder
import Button from '../components/Button';
const aleoWorker = AleoWorker();

const CreateBet: React.FC = () => {
    const [count, setCount] = useState(0);
    const [account, setAccount] = useState(null);
    const [executing, setExecuting] = useState(false);
  
    const generateAccount = async () => {

    };
  
    async function execute() {
      setExecuting(true);
      const key = await aleoWorker.getPrivateKey();
      setAccount(await key.to_string());
      const result = await aleoWorker.localProgramExecution(
        zkjom_contracts,
        "main",
        ["5u32", "5u32"],
      );
      setExecuting(false);
  
      alert(JSON.stringify(result));
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">What type of bet are you opting for?</h1>

          <div className="mb-4">
              <input
                  type="text"
                  readOnly
                  value="aleo1ehfcgfk7vd38lkyk735vgea08qymzhwe3cc7lhqm9pvdmjpvhu8shfprq6"
                  className="p-2 border rounded w-full" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col items-center">
                  <Image src="/bet1.png" alt="Bet 1 Horse" width={100} height={100} />
                  <span className="mt-2">3, 2</span>
              </div>

              <div className="flex flex-col items-center">
                  <Image src="/bet2.png" alt="Bet 2 Horse" width={100} height={100} />
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button onClick={() => console.log('Win Bet (Top 1)')}>
                        Win Bet (Top 1)
                    </Button>
                    <Button onClick={() => console.log('Place Bet (Top 2)')}>
                        Place Bet (Top 2)
                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

export default CreateBet;
