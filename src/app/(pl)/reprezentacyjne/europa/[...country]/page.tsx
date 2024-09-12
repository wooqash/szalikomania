import ReprezentacyjneEuropaPageOrigin from "../../../../../../roots/reprezentacyjne/europa/[...country]/page";
import { Router, compileHref } from "next-roots";

export default function ReprezentacyjneEuropaPage({
  params,
  ...otherProps
}: any) {
  Router.setPageHref(compileHref("/reprezentacyjne/europa/:country+", params));
  {
    /* @ts-ignore */
  }
  return (
    <ReprezentacyjneEuropaPageOrigin
      {...otherProps}
      params={params}
      pageHref={Router.getPageHref()}
    />
  );
}
