
import WidzewLodzPageOrigin from '../../../_roots/widzew-lodz/page'
import { Router } from 'next-roots'

export default function WidzewLodzPage(props:any) {
  Router.setPageHref("/widzew-lodz")
  {/* @ts-ignore */}
  return <WidzewLodzPageOrigin {...props} pageHref={Router.getPageHref()} />
}
