import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: `Konttakt - ${commonMetadata.title}`,
  description: "Strona kontaktowa Szalikomania",
};

const ContactPage: FC = () => {
  return (
    <div>
      <h1>Kontakt</h1>
    </div>
  );
};

export default ContactPage;
