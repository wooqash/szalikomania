import KlubowePolskieSlaskieRuchChorzowPageOrigin from "../../../../../../../roots/klubowe/polskie/slaskie/ruch-chorzow/page";
import { Router } from "next-roots";

export default function KlubowePolskieSlaskieRuchChorzowPage(props: any) {
  Router.setPageHref("/en/clubs/poland/slaskie/ruch-chorzow");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieSlaskieRuchChorzowPageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
