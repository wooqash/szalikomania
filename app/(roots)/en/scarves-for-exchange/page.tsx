
import WymianyPageOrigin from '../../../_roots/wymiany/page'
import { Router } from 'next-roots'

export default function WymianyPage(props:any) {
  Router.setPageHref("/en/scarves-for-exchange")
  {/* @ts-ignore */}
  return <WymianyPageOrigin {...props} pageHref={Router.getPageHref()} />
}
