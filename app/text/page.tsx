"use client"
import { playSound } from "@/components/sound";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      playSound();
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <main>
      <textarea className="border h-96 w-full outline-none bg-black" name="" id="">

      </textarea>

    </main>
  );
}
