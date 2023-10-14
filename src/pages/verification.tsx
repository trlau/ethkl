import React from 'react';
import HoverCard from '../components/HoverCard';
import Link from "next/link";
import Button from '../components/Button';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="mb-6 text-4xl font-bold">Please Scan your Fingerprint</h1>
            <HoverCard>
                <div>
                    <img
                        src="/fingerprint.png"
                        alt="Fingerprint"
                        className="transition-all duration-300"
                    />
                </div>
            </HoverCard>

            <div className="mt-4 text-center">
                <Link href="Dashboard">
                    <div>
                        <p className="text-xl font-bold ml-2 nav-text pl-2 z-10">
                            <Button>
                                Fingerprint Scanning
                            </Button>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
