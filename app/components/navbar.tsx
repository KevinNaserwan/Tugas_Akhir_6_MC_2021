"use client";
import React, { useState } from "react";

const Navbar = ({ onSelect }: any) => {
  return (
    <div className="flex flex-row lg:gap-9 gap-2 relative z-10 lg:border lg:border-white lg:p-5 rounded-lg">
      <button
        className="inline-flex h-12 lg:text-base text-xs animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => onSelect("aboutUs")}
      >
        About Us
      </button>
      <button
        className="inline-flex h-12 lg:text-base text-xs animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => onSelect("about")}
      >
        About
      </button>
      <button
        className="inline-flex h-12 lg:text-base text-xs animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => onSelect("userGuide")}
      >
        User Guide
      </button>
    </div>
  );
};

export default Navbar;
