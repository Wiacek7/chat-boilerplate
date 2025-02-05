"use client";

import { useBitteWallet } from "@bitte-ai/react";
import Image from "next/image";
import React from "react";
import NearWalletConnector from "./NearWalletConnector";

const Header: React.FC = () => {
  const { isConnected } = useBitteWallet();

  return (
    <header className="flex items-center justify-between gap-4 border-b border-[#334155] px-6 py-4 md:px-16 md:py-6">
      <Image
        src="/bitte-logo.svg"
        alt="Bitte logo"
        width={32}
        height={32}
        className="hidden md:block"
      />
      <Image
        src="/bitte-logo.svg"
        alt="Bitte logo"
        width={32}
        height={32}
        className="md:hidden"
      />
      <div className="flex gap-4 items-center">
        <NearWalletConnector />

        <div
          className={`h-[36px] w-px bg-[#334155] mx-2 hidden md:block ${
            isConnected ? "hidden" : ""
          }`}
        />
        
      </div>
    </header>
  );
};

export default Header;
