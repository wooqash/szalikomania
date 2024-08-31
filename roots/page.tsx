import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home - ${commonMetadata.title}`,
  description: `Main page of ${commonMetadata.title}`,
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
