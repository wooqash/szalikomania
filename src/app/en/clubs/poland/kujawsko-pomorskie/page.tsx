import KlubowePolskieKujawskoPomorskiePageOrigin from "../../../../../../roots/klubowe/polskie/kujawsko-pomorskie/page";
import { Router } from "next-roots";

export default function KlubowePolskieKujawskoPomorskiePage(props: any) {
  Router.setPageHref("/en/clubs/poland/kujawsko-pomorskie");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieKujawskoPomorskiePageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
