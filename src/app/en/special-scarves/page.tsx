import SpecjalnePageOrigin from "../../../../roots/specjalne/page";
import { Router } from "next-roots";

export default function SpecjalnePage(props: any) {
  Router.setPageHref("/en/special-scarves");
  {
    /* @ts-ignore */
  }
  return <SpecjalnePageOrigin {...props} pageHref={Router.getPageHref()} />;
}
