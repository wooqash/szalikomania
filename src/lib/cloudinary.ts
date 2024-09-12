import { CLOUDINARY_SEARCH_URL } from "@/common/config";
import { CImage, CImages } from "@/types/CImage";

export async function search(options: Object = {}) {
  const params = {
    ...options,
  };

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
  console.log("paramString ", paramString);

  const results = await fetch(`${CLOUDINARY_SEARCH_URL}?${paramString}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET).toString("base64")}`,
    },
  }).then((r) => r.json());

  return results;
}

export function mapImageResources(resources: CImages) {
  return resources.map((resource: CImage) => {
    const { asset_id, folder, url, width, height, title } = resource;
    return {
      id: asset_id,
      src: url,
      width: width,
      height: height,
      dir: folder,
    };
  });
}
