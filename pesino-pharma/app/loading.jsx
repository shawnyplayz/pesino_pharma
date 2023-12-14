import Image from "next/image";
import InnovativeCursorLoader from "./loader/InnovativeCursorLoader";
import innocursor from "../public/innocursor.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className="flex flex-row fixed z-50 w-full h-full justify-center items-center bg-opacity-60"
      style={{ background: "rgba(169, 169, 169, 0.8)" }}
    >
      <div className="bg-white rounded-2xl flex flex-col gap-2 p-5 justify-center items-center">
        <Image src={innocursor} alt="loader" loading="eager" priority />
        <div className="font-medium text-2xl">Powered by Innovative Cursor</div>
      </div>
    </div>
  );
}
