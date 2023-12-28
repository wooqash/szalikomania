
import ElanaTorunPageOrigin from '../../../_roots/elana-torun/page'
import { Router } from 'next-roots'

export default function ElanaTorunPage(props:any) {
  Router.setPageHref("/elana-torun")
  {/* @ts-ignore */}
  return <ElanaTorunPageOrigin {...props} pageHref={Router.getPageHref()} />
}
