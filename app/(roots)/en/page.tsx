
import RootPageOrigin from '../../_roots/page'
import { Router } from 'next-roots'

export default function RootPage(props:any) {
  Router.setPageHref("/en")
  {/* @ts-ignore */}
  return <RootPageOrigin {...props} pageHref={Router.getPageHref()} />
}
