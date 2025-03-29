import HeaderText from "@/Components/HeaderText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-full flex items-center justify-center h-full space-x-10">
        <HeaderText />
      </div>
    </div>
  );
}
