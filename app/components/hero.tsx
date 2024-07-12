import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" relative z-20  flex flex-row items-center justify-center lg:gap-11">
        <h1 className=" font-bold lg:text-6xl text-xl text-white">
          Alat Uji Tarik Non Logam
        </h1>
        <div className=" flex flex-row items-center gap-5 ">
          <Image
            alt=""
            src={"/assets/images/logo1-1.png"}
            width={80}
            height={80}
            className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
          />
          <Image
            alt=""
            src={"/assets/images/logo-2.jpeg"}
            width={80}
            height={80}
            className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
