import "../globals.css";

import defaultMetadata from "@/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Products Page",
  description:
    "Explore the diverse range of pharmaceutical products offered by Your Company Name. From cutting-edge formulations to efficient dosage forms, we prioritize quality and efficacy.",
};

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
