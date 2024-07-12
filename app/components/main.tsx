"use client";
import React from "react";
import Image from "next/image";

export function Main() {
  return (
    <div className="flex flex-col">
      <h1 className=" text-center font-bold lg:text-2xl text-lg text-white">
        Gambar Alat
      </h1>
      <Image
        src={"/assets/images/alat.png"}
        alt=""
        width={400}
        height={600}
        className=" mt-6 mb-16 lg:pb-24 pb-0 lg:w-[400px] lg:h-[600px] w-[250px] h-[300px] mx-auto"
      />
    </div>
  );
}
