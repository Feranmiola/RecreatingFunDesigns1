"use client";
import HeaderText from "@/Components/HeaderText";
import ImageGrid from "@/Components/ImageGrid";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="flex w-full h-screen starterPage bg-[#2F2F2F] items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen">
      <div className="w-full flex items-center justify-center h-full space-x-10">
        <div className="flex flex-col space-y-8">
          <HeaderText />
          <div className="flex flex-col space-y-5">
            <p className="font-poppins font-light text-2xl max-w-[440px] text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </p>
            <button className="flex items-center cursor-pointer myButton hover:bg-transparent hover:text-white hover:scale-110 border-1 border-transparent hover:border-white transition ease-in-out justify-center w-max px-12 py-4 bg-white rounded-[36px] text-[#232323] text-2xl">
              Explore
            </button>
          </div>
        </div>
        <ImageGrid />
      </div>
    </div>
  );
}
