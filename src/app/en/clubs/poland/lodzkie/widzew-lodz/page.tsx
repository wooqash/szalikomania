import KlubowePolskieLodzkieWidzewLodzPageOrigin from "../../../../../../../roots/klubowe/polskie/lodzkie/widzew-lodz/page";
import { Router } from "next-roots";

export default function KlubowePolskieLodzkieWidzewLodzPage(props: any) {
  Router.setPageHref("/en/clubs/poland/lodzkie/widzew-lodz");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieLodzkieWidzewLodzPageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}

export { metadata } from "../../../../../../../roots/klubowe/polskie/lodzkie/widzew-lodz/page";
