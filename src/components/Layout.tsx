import Header from "./Header";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className="min-h-screen mx-auto">
            <Header />
            <div className="min-h-screen mx-auto">
                <main className="my-0">{children}</main>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });