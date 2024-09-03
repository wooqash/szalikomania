import KluboweResztaSwiataPageOrigin from "../../../../../roots/klubowe/reszta-swiata/page";
import { Router } from "next-roots";

export default function KluboweResztaSwiataPage(props: any) {
  Router.setPageHref("/klubowe/reszta-swiata");
  {
    /* @ts-ignore */
  }
  return (
    <KluboweResztaSwiataPageOrigin {...props} pageHref={Router.getPageHref()} />
  );
}

export { metadata } from "../../../../../roots/klubowe/reszta-swiata/page";
