import ContactPageOrigin from "../../../../roots/contact/page";
import { Router } from "next-roots";

export default function ContactPage(props: any) {
  Router.setPageHref("/en/contact");
  {
    /* @ts-ignore */
  }
  return <ContactPageOrigin {...props} pageHref={Router.getPageHref()} />;
}

export { metadata } from "../../../../roots/contact/page";
