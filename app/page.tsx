"use client";

import Hero from "./components/hero";
import { Main } from "./components/main";
import { useState } from "react";
import Navbar from "./components/navbar";

export default function Home() {
  const [selected, setSelected] = useState("about");
  return (
    <main className=" relative flex min-h-screen flex-col items-center  overflow-auto overflow-y-hidden mx-auto   bg-blue-500">
      <Hero />
      <div className=" bg-white min-h-screen w-full flex flex-col justify-start pt-12 items-center">
        <Navbar onSelect={setSelected} />
        <Main selected={selected} />
      </div>
    </main>
  );
}
