import WidzewLodzPageOrigin from "../../../../roots/widzew-lodz/page";
import { Router } from "next-roots";

export default function WidzewLodzPage(props: any) {
  Router.setPageHref("/en/widzew-lodz");
  {
    /* @ts-ignore */
  }
  return <WidzewLodzPageOrigin {...props} pageHref={Router.getPageHref()} />;
}

export { metadata } from "../../../../roots/widzew-lodz/page";
