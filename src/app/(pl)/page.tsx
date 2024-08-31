import RootPageOrigin from "../../../roots/page";
import { Router } from "next-roots";

export default function RootPage(props: any) {
  Router.setPageHref("/");
  {
    /* @ts-ignore */
  }
  return <RootPageOrigin {...props} pageHref={Router.getPageHref()} />;
}

export { metadata } from "../../../roots/page";
