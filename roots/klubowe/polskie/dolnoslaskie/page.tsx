import { NEXT_FETCH_BASE } from "@/common/config";
import { mapImageResources, search } from "@/lib/cloudinary";
import { Images } from "@/types/CImage";
import { NextPage } from "next";
import Picture from "@/common/components/Picture/Picture";
import router, { PageProps } from "next-roots";

type LowerSilesiaVoivodeshipClubsProps = {
  params: {
    country: string;
  };
};

const LowerSilesiaVoivodeshipClubs: NextPage<
  LowerSilesiaVoivodeshipClubsProps & PageProps
> = async ({ params, pageHref }) => {
  const results = await fetch(`${NEXT_FETCH_BASE}/api`, {
    // next: {
    //   revalidate: 3,
    // },
    method: "POST",
    body: JSON.stringify({
      expression: `folder=szalikomania${pageHref}`,
    }),
  });

  if (!results.ok) {
    throw new Error("problem with getting => 'klubowe/polskie/dolnoslaskie'");
  }

  const res = await results.json();
  const { resources } = res;

  const images: Images = resources ? mapImageResources(resources) : [];

  return (
    <div>
      {/* Reprezentacje {params.country} */}
      <br />
      <div style={{ display: "flex", gap: 20 }}>
        {images.map((image) => {
          return <Picture key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default LowerSilesiaVoivodeshipClubs;
