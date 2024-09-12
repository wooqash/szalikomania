export type CImage = {
  asset_id: string;
  url: string;
  width: number;
  height: number;
  folder: string;
  title: string;
};

export type Image = {
  id: string;
  src: string;
  width: number;
  height: number;
  dir: string;
};

export type CImages = CImage[];
export type Images = Image[];
