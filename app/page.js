import Main from "./main/page";
import "./globals.css";
import defaultMetadata from "@/metadata";
import { Suspense } from "react";
import Loading from "./loading";
export const metadata = {
  ...defaultMetadata,
  title: "Home Page",
  description: "Serving quality medicines Since 1992",
};
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Main />
      </main>
    </Suspense>
  );
}
