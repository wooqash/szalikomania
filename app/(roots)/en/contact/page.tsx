
import KontaktPageOrigin from '../../../_roots/kontakt/page'
import { Router } from 'next-roots'

export default function KontaktPage(props:any) {
  Router.setPageHref("/en/contact")
  {/* @ts-ignore */}
  return <KontaktPageOrigin {...props} pageHref={Router.getPageHref()} />
}
