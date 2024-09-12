import KlubowePolskieLodzkiePageOrigin from "../../../../../../roots/klubowe/polskie/lodzkie/page";
import { Router } from "next-roots";

export default function KlubowePolskieLodzkiePage(props: any) {
  Router.setPageHref("/klubowe/polskie/lodzkie");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieLodzkiePageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}

export { metadata } from "../../../../../../roots/klubowe/polskie/lodzkie/page";
