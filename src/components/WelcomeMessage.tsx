import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center justify-center text-[#A6AAB0] absolute z-20 bg-[#18181A] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-medium w-full">
      <Image
        src="/bitte-logo.svg"
        alt="bitte logo transparent"
        width={40}
        height={40}
      />
      <h1 className="text-[20px] my-4 font-semibold">
        Youbuidl Agent
      </h1>
      <p className="my-2 md:w-[290px]">
        Complete onchain tasks with the Youbuidl Agent powered by Bitte.
      </p>
      <hr className="w-[92px] bg-[#505865]" />
      <hr className="w-[92px] bg-[#505865]" />
      <div className="flex justify-center gap-8 md:gap-16 mt-4 text-[#FAFAFA] text-[14px]">
        <a
          href="#"
          target="_blank"
          className="no-underline hover:underline flex gap-2 items-center"
        >
          Generate an idea
          <ArrowUpRight size={14} />
        </a>
      
      </div>
    </div>
  );
};

export default WelcomeMessage;
