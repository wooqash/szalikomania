import KlubowePolskieDolnoslaskiePageOrigin from "../../../../../../roots/klubowe/polskie/dolnoslaskie/page";
import { Router } from "next-roots";

export default function KlubowePolskieDolnoslaskiePage(props: any) {
  Router.setPageHref("/klubowe/polskie/dolnoslaskie");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieDolnoslaskiePageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
