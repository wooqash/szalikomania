export const NEXT_FETCH_BASE =
  process.env.NEXT_FETCH_BASE || "http://localhost:3000/";
export const CLOUDINARY_SEARCH_URL =
  `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search` ||
  "http://localhost:3004/resources";
