import KlubowePolskaPageOrigin from "../../../../../roots/klubowe/polska/page";
import { Router } from "next-roots";

export default function KlubowePolskaPage(props: any) {
  Router.setPageHref("/klubowe/polska");
  {
    /* @ts-ignore */
  }
  return <KlubowePolskaPageOrigin {...props} pageHref={Router.getPageHref()} />;
}
