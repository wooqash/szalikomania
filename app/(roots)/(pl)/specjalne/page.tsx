
import SpecjalnePageOrigin from '../../../_roots/specjalne/page'
import { Router } from 'next-roots'

export default function SpecjalnePage(props:any) {
  Router.setPageHref("/specjalne")
  {/* @ts-ignore */}
  return <SpecjalnePageOrigin {...props} pageHref={Router.getPageHref()} />
}
