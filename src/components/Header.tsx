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
        width={16}
        height={16}
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
        <a
          href="mailto:paul@bitte.ai"
          className="bg-[#27272A] text-[#FAFAFA] px-8 py-2 hover:bg-opacity-80 rounded-md font-medium h-[40px]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
