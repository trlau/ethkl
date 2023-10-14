import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = () => {

  return (
    <header className="sticky top-0 z-40 scrolled-header py-2">
      <div className="py-4 flex items-center justify-between mx-12">
        <Link href="/">
          <div className="flex items-center">
            <Image
              width={36}
              height={36}
              src="/zkJ0M.png"
              className="w-20 md:w-15"
              alt="logo"
            />
            <p className="text-2xl font-bold ml-2 text-gradient z-10">
              ZKJ0M
            </p>
          </div>
        </Link>
          <div className="flex">
            <Link href="/verification">
              <div className="items-center">
                <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                  Verification
                </p>
              </div>
            </Link>
            <Link href="/dashboard">
              <div className="items-center">
                <p className="text-xl font-bold ml-2 nav-text pl-2 z-10">
                  Dashboard
                </p>
              </div>
            </Link>
          </div>

        <div className="flex flex-wrap justify-end">
          Bet Now
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });