import KluboweEuropaCountryPageOrigin from "../../../../../../roots/klubowe/europa/[country]/page";
import { Router, compileHref } from "next-roots";

export default function KluboweEuropaCountryPage({
  params,
  ...otherProps
}: any) {
  Router.setPageHref(compileHref("/klubowe/europa/:country", params));
  {
    /* @ts-ignore */
  }
  return (
    <KluboweEuropaCountryPageOrigin
      {...otherProps}
      params={params}
      pageHref={Router.getPageHref()}
    />
  );
}

import { generateMetadata as generateMetadataOrigin } from "../../../../../../roots/klubowe/europa/[country]/page";

export async function generateMetadata({ params, ...otherProps }: any) {
  return generateMetadataOrigin({
    ...otherProps,
    params,
    pageHref: compileHref("/klubowe/europa/:country", params),
  });
}
