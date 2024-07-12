import Hero from "./components/hero";
import { Main } from "./components/main";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center justify-center overflow-clip mx-auto lg:p-24 p-10">
      <Hero />
      <Navbar />
      <Main />
    </main>
  );
}
