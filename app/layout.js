import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Pesino Pharma",
    template: "%s | Pesino Pharma",
  },
  description:
    "Quality our way of Life, Serving Humankind through quality Medicines",
  keywords: [
    "Pesino",
    "Pharmaceuticals",
    "Pharmaceutical Solutions",
    "Drug Manufacturing",
    "Quality Pharmaceuticals",
    "Pharmaceutical Innovations",
    "Research and Development",
    "cGMP Compliance",
    "Advanced Drug Formulations",
    "Healthcare Excellence",
    "Pharmaceutical Partnerships",
    "Pharmaceutical Manufacturing",
    "Global Pharmaceutical Exporter",
    "Quality Assurance in Pharma",
    "Pharmaceutical Distribution",
    "Cutting-edge Formulations",
    "Pharmaceutical Expertise",
  ],
  author: [{ name: "Agnelo Almeida" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ width: "100%", height: "0.5rem", overflow: "visible" }}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
