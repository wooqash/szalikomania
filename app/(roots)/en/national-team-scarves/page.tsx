
import ReprezentacyjnePageOrigin from '../../../_roots/reprezentacyjne/page'
import { Router } from 'next-roots'

export default function ReprezentacyjnePage(props:any) {
  Router.setPageHref("/en/national-team-scarves")
  {/* @ts-ignore */}
  return <ReprezentacyjnePageOrigin {...props} pageHref={Router.getPageHref()} />
}
