import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const LandingPageContents = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex flex-col md:flex-row items-center">

        {/* Left Column (Logo) */}
        <div className="md:w-2/5 h-[500px] pr-4 flex justify-center items-center">
          <img src="/zkJ0M.png" alt="Logo" className="w-[300px] h-auto"/>
        </div>

        {/* Right Column (Title and Description) */}
        <div className="md:w-3/5 mt-4 md:mt-0 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            Cancelling
            <span className="text-gradient">
              <Typewriter
                words={[" Bias ", " Psychology ", " Inequality "]}
                loop={false}
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={60}
                deleteSpeed={90}
                delaySpeed={1250}
              />
            </span>
          </h1>
          <p className="text-3xl mt-8 text-justify">
            Hiding Statistical Numbers, Bet without bias
            Anti-Psychology Thoughts, zkJ0M Bet.
          </p>
          <p className="text-2xl mt-8 text-justify">
            Establishing a groundbreaking betting platform enabling users to
            bet without being affected psychologically.
          </p>
          <Link href="/verification" passHref>
            <button className="text-xl mt-8 text-gradient font-bold cursor-pointer">
              Create an Account Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContents;
