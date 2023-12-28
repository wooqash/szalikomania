
import KlubowePageOrigin from '../../../_roots/klubowe/page'
import { Router } from 'next-roots'

export default function KlubowePage(props:any) {
  Router.setPageHref("/klubowe")
  {/* @ts-ignore */}
  return <KlubowePageOrigin {...props} pageHref={Router.getPageHref()} />
}
