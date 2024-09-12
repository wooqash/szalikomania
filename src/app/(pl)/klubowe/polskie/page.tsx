import KlubowePolskiePageOrigin from "../../../../../roots/klubowe/polskie/page";
import { Router } from "next-roots";

export default function KlubowePolskiePage(props: any) {
  Router.setPageHref("/klubowe/polskie");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskiePageOrigin {...props} pageHref={Router.getPageHref()} />
  );
}
