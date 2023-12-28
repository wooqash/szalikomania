
import RuchChorzowPageOrigin from '../../../_roots/ruch-chorzow/page'
import { Router } from 'next-roots'

export default function RuchChorzowPage(props:any) {
  Router.setPageHref("/en/ruch-chorzow")
  {/* @ts-ignore */}
  return <RuchChorzowPageOrigin {...props} pageHref={Router.getPageHref()} />
}
