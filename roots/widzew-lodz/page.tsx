import Pagination from "@/common/components/Pagination/Pagination";
import { commonMetadata } from "@/common/shared-metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: `Widzew Łódź - ${commonMetadata.title}`,
  description: "Szaliki Widzew Łódź",
};

//take this info from API
const PHOTOS_PER_PAGE = 10;
const PHOTOS_TOTAL = 5000;

type PhotosPageProps = {};

const WidzewLodz: NextPage<PhotosPageProps> = async () => {
  let page = 1;

  const res = await fetch(`http://localhost:3004/photos`, {
    next: { revalidate: 5 },
  });
  if (!res.ok) {
    throw new Error("problem with getting Widzew Lodz photos");
  }

  const photos = await res.json();

  return (
    <>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} />
          <p>{photo.title}</p>
        </div>
      ))}
      <Pagination page={page} total={PHOTOS_TOTAL} perPage={PHOTOS_PER_PAGE} />
    </>
  );
};

export default WidzewLodz;
