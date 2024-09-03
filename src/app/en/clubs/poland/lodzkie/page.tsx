import KlubowePolskaLodzkiePageOrigin from "../../../../../../roots/klubowe/polska/lodzkie/page";
import { Router } from "next-roots";

export default function KlubowePolskaLodzkiePage(props: any) {
  Router.setPageHref("/en/clubs/poland/lodzkie");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskaLodzkiePageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}

export { metadata } from "../../../../../../roots/klubowe/polska/lodzkie/page";
