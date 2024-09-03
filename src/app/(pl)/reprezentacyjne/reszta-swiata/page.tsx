import ReprezentacyjneResztaSwiataPageOrigin from "../../../../../roots/reprezentacyjne/reszta-swiata/page";
import { Router } from "next-roots";

export default function ReprezentacyjneResztaSwiataPage(props: any) {
  Router.setPageHref("/reprezentacyjne/reszta-swiata");
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
