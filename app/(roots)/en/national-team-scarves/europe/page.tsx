
import ReprezentacyjneEuropaPageOrigin from '../../../../_roots/reprezentacyjne/europa/page'
import { Router } from 'next-roots'

export default function ReprezentacyjneEuropaPage(props:any) {
  Router.setPageHref("/en/national-team-scarves/europe")
  {/* @ts-ignore */}
  return <ReprezentacyjneEuropaPageOrigin {...props} pageHref={Router.getPageHref()} />
}
