
import KlubowePolskaPageOrigin from '../../../../_roots/klubowe/polska/page'
import { Router } from 'next-roots'

export default function KlubowePolskaPage(props:any) {
  Router.setPageHref("/en/clubs/poland")
  {/* @ts-ignore */}
  return <KlubowePolskaPageOrigin {...props} pageHref={Router.getPageHref()} />
}
