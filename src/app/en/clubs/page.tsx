import KlubowePageOrigin from "../../../../roots/klubowe/page";
import { Router } from "next-roots";

export default function KlubowePage(props: any) {
  Router.setPageHref("/en/clubs");
  {
    /* @ts-ignore */
  }
  return <KlubowePageOrigin {...props} pageHref={Router.getPageHref()} />;
}
