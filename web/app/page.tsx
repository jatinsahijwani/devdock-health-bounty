"use client";
import { useRouter } from "next/navigation";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const router = useRouter();
  const words = [
    {
        text: "Smart",
      },
      {
        text: "HealthCare",
      }, 
      {
        text: "Solution",
      },
      {
        text: "-",
      },
      
    {
      text: "HealthChain.",
      className: "text-blue-500 dark:text-green-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        A One Step Blockchain Based Health Care Solution.
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button onClick={() => {
          router.push('/signup');
        }} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button onClick={() => {
          router.push('/signup');
        }} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
