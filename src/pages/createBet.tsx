import React from 'react';
import Image from 'next/image';
import { useState } from "react";
import { AleoWorker } from "../workers/AleoWorker.js";
import Button from '../components/Button';

const aleoWorker = AleoWorker();

const CreateBet: React.FC = () => {
    const [count, setCount] = useState(0);
    const [account, setAccount] = useState(null);
    const [executing, setExecuting] = useState(false);
  
    const generateAccount = async () => {
        // Code for generating an account (if needed)
    };
  
    async function execute() {
        setExecuting(true);
        const key = await aleoWorker.getPrivateKey();
        setAccount(await key.to_string());
        const result = await aleoWorker.localProgramExecution(
            // zkjom_contracts,
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

            <div className="grid grid-cols-2 gap-4">
                <Image src="/path_to_your_image1.jpg" alt="Image 1" width={100} height={100} />
                <Image src="/path_to_your_image2.jpg" alt="Image 2" width={100} height={100} />
            </div>

            <div className="mt-4">
                <Button onClick={execute}>Execute</Button>
                {/* You can add more buttons or functionality as needed */}
            </div>
        </div>
    );
};

export default CreateBet;
