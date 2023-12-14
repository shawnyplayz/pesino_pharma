import Image from "next/image";
import Main from "./main/page";
import Navbar from "./navbar/page";
import Footer from "./footer/Footer";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
