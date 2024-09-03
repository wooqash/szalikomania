import ReprezentacyjneResztaSwiataPageOrigin from "../../../../../roots/reprezentacyjne/reszta-swiata/page";
import { Router } from "next-roots";

export default function ReprezentacyjneResztaSwiataPage(props: any) {
  Router.setPageHref("/en/national-team-scarves/rest-of-world");
  {
    /* @ts-ignore */
  }
  return (
    <ReprezentacyjneResztaSwiataPageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
