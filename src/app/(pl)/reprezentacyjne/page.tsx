import ReprezentacyjnePageOrigin from "../../../../roots/reprezentacyjne/page";
import { Router } from "next-roots";

export default function ReprezentacyjnePage(props: any) {
  Router.setPageHref("/reprezentacyjne");
  {
    /* @ts-ignore */
  }
  return (
    <ReprezentacyjnePageOrigin {...props} pageHref={Router.getPageHref()} />
  );
}
