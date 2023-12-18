import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./navbar/page";
import Footer from "./footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Pesino Pharma",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ width: "100%", height: "0.5rem", overflow: "visible" }}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
