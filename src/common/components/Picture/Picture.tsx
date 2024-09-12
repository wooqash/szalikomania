"use client";
import { CldImage } from "next-cloudinary";
import { Image } from "@/types/CImage";
import { FC } from "react";

type PictureProps = {
  // params: {
  image: Image;
  // };
};

export const Picture: FC<PictureProps> = ({ image }) => {
  return (
    <CldImage
      // deliveryType="fetch"
      src={image.src}
      alt={image.id}
      width={200}
      height={200}
      sizes="50vw"
      crop={"lpad"}
      background="blue"
      // fill={true}
    />
  );
};

export default Picture;
