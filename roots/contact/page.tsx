import Menu from "@/common/components/Menu/Menu";
import { commonMetadata } from "@/common/shared-metadata";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: `Contact - ${commonMetadata.title}`,
  description: "Contact page of Szalikomania",
};

const ContactPage: FC = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default ContactPage;
