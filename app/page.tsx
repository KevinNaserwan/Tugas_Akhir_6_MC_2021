import Hero from "./components/hero";
import { Main } from "./components/main";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center  overflow-clip mx-auto   bg-blue-500">
      <Hero />
      <div className=" bg-white min-h-screen w-full flex flex-col justify-start pt-12 pb-6 items-center">
        <Navbar />
        <Main />
      </div>
    </main>
  );
}
