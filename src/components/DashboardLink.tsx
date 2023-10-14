import Link from 'next/link';
import React from 'react';

function DashboardLink() {
    return (
        <Link href="/dashboard">
            <div className="items-center cursor-pointer">
                <p className="text-xl font-bold ml-2 nav-text pl-2 z-10">
                    Governance
                </p>
            </div>
        </Link>
    );
}

export default DashboardLink;
