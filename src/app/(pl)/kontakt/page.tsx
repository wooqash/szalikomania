import KontaktPageOrigin from "../../../../roots/kontakt/page";
import { Router } from "next-roots";

export default function KontaktPage(props: any) {
  Router.setPageHref("/kontakt");
  {
    /* @ts-ignore */
  }
  return <KontaktPageOrigin {...props} pageHref={Router.getPageHref()} />;
}

export { metadata } from "../../../../roots/kontakt/page";
