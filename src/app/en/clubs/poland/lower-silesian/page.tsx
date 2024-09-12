import KlubowePolskieDolnoslaskiePageOrigin from "../../../../../../roots/klubowe/polskie/dolnoslaskie/page";
import { Router } from "next-roots";

export default function KlubowePolskieDolnoslaskiePage(props: any) {
  Router.setPageHref("/en/clubs/poland/lower-silesian");
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
