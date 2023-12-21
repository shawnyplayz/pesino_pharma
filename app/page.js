import Main from "./main/page";
import "./globals.css";
import defaultMetadata from "@/metadata";
export const metadata = {
  ...defaultMetadata,
  title: "Home Page",
  description: "Serving quality medicines Since 1992",
};
export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
