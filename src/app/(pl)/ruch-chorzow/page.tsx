import RuchChorzowPageOrigin from "../../../../roots/ruch-chorzow/page";
import { Router } from "next-roots";

export default function RuchChorzowPage(props: any) {
  Router.setPageHref("/ruch-chorzow");
  {
    /* @ts-ignore */
  }
  return <RuchChorzowPageOrigin {...props} pageHref={Router.getPageHref()} />;
}
