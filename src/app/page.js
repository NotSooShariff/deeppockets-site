import Image from "next/image";
import Navbar from "./../components/Navbar";
import Cards from "@/components/Cards";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <header class="relative w-full h-screen bg-[url('/hero2.jpg')] bg-cover bg-center flex justify-center items-center">
        <nav class="fixed top-0 w-full p-4 ">
          <Navbar />
        </nav>
        <div class="flex flex-col justify-center items-center">
          {/* <h1 class="mt-16 text-center text-8xl text-white font-bold drop-shadow-lg">
            Deep Pockets <br/>
          </h1> */}
          <img src="/deep-pockets-title.png" alt="" />
          <p class="mt-1 text-center text-3xl text-white opacity-70">
          The memecoin inspired by the legend himself
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Buy Now!
          </button>
        </div>
      </header>

      <Cards/>
      <About/>
      <Footer/>

    </main>
  );
}
