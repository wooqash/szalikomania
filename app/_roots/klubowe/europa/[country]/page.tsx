import { Metadata, NextPage, ResolvingMetadata } from "next";
import { getSegmentId } from "@utils/getSegmentId";
import { PageProps } from "@utils/types";
import { countries } from "./countries";

function getCountryName(params: { country: string }) {
  if (!params) {
    return;
  }
  const countryId = getSegmentId(params.country);
  const country = countries.find((country) => country.id === countryId);
  const countryName = country?.name || countryId;
  const countryNameCapitialized =
    countryName?.charAt(0).toUpperCase() + countryName?.slice(1);

  return countryNameCapitialized;
}

export async function generateMetadata(
  { params, searchParams }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const countryName = getCountryName(params);

  return {
    title: `${countryName} | Europa `,
  };
}

const EuropanClubs: NextPage = ({ params }: PageProps) => {
  const countryName = getCountryName(params);
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4 text-white/80">
        <h1>Zagraniczne Klubowe - {countryName}</h1>
      </main>
    </>
  );
};

export default EuropanClubs;
