import ReprezentacyjneEuropaPageOrigin from "../../../../../roots/reprezentacyjne/europa/page";
import { Router } from "next-roots";

export default function ReprezentacyjneEuropaPage(props: any) {
  Router.setPageHref("/reprezentacyjne/europa");
  {
    /* @ts-ignore */
  }
  return (
    <ReprezentacyjneEuropaPageOrigin
      {...props}
      pageHref={Router.getPageHref()}
    />
  );
}
