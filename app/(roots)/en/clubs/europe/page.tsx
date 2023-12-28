
import KluboweEuropaPageOrigin from '../../../../_roots/klubowe/europa/page'
import { Router } from 'next-roots'

export default function KluboweEuropaPage(props:any) {
  Router.setPageHref("/en/clubs/europe")
  {/* @ts-ignore */}
  return <KluboweEuropaPageOrigin {...props} pageHref={Router.getPageHref()} />
}
