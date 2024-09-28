import KlubowePolskieKujawskoPomorskieElanaTorunPageOrigin from "../../../../../../../roots/klubowe/polskie/kujawsko-pomorskie/elana-torun/page";
import { Router } from "next-roots";

export default function KlubowePolskieKujawskoPomorskieElanaTorunPage(
  props: any,
) {
  Router.setPageHref("/en/clubs/poland/kujawsko-pomorskie/elana-torun");
  {
    /* @ts-ignore */
  }
  return (
    <KlubowePolskieKujawskoPomorskieElanaTorunPageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
