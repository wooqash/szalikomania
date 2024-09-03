import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: `Konttakt - ${commonMetadata.title}`,
  description: "klubowa Reszta świata",
};

const ClubsRestOfWorldPage: FC = () => {
  return (
    <div>
      <h1>Kontakt</h1>
    </div>
  );
};

export default ClubsRestOfWorldPage;
