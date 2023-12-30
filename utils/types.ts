/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  tags: string[];
  context: {
    alt: string;
    caption: string;
  };
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}

export interface SVGMapPath {
  id: string;
  d: string;
  href: string;
  title?: string;
  color?: string;
  hoverColor?: string;
}

export type PageProps = {
  params: { country: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
